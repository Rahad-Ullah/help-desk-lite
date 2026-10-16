import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketsService) { }

  @Get()
  findAll(@Query() filters: FilterTicketsQueryDto) {
    return this.ticketService.findAll(filters.status, filters.priority);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateTicketDto) {
    return this.ticketService.create(payload);
  }
}
