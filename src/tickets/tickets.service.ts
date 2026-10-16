import { Injectable, NotFoundException } from '@nestjs/common';
import { ITicket } from './tickets.interface';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  private readonly tickets: ITicket[] = [
    {
      id: 1,
      subject: 'Ticket 1',
      description: 'Description 1',
      priority: 'low',
      status: 'open',
      createdAt: '2023-01-01T10:00:00Z',
    },
    {
      id: 2,
      subject: 'Ticket 2',
      description: 'Description 2',
      priority: 'medium',
      status: 'closed',
      createdAt: '2023-01-02T10:00:00Z',
    },
  ];

  private nextId = 3;

  findAll(status: ITicket['status'], priority: ITicket['priority']) {
    let tickets = this.tickets;

    if (status) {
      tickets = tickets.filter((ticket) => ticket.status === status);
    }

    if (priority) {
      tickets = tickets.filter((ticket) => ticket.priority === priority);
    }

    return tickets;
  }

  findOne(id: number) {
    const ticket = this.tickets.find((ticket) => ticket.id === id);
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return ticket;
  }

  create(payload: CreateTicketDto) {
    const ticket: ITicket = {
      id: this.nextId++,
      subject: payload.subject,
      description: payload.description,
      priority: payload.priority,
      status: 'open',
      createdAt: new Date().toISOString(),
    };

    this.tickets.push(ticket);
    return ticket;
  }
}
