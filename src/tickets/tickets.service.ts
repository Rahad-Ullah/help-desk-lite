import { Injectable } from '@nestjs/common';
import { Tickets } from './tickets.interface';

@Injectable()
export class TicketsService {
  private readonly tickets: Tickets[] = [
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

  findAll() {
    return this.tickets;
  }
}
