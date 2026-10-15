import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ITicket } from './tickets.interface';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketsService) {}

  @Get()
  findAll(
    @Query('status') status?: ITicket['status'],
    @Query('priority') priority?: ITicket['priority'],
  ) {
    return this.ticketService.findAll(
      status as ITicket['status'],
      priority as ITicket['priority'],
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketService.findOne(id);
  }
}
