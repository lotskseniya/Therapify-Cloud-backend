import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, HttpCode, Put, UsePipes } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto'; 
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
 
  @Get()
  @Auth()
  async getAllClients(@CurrentUser('id') userId: string) {
    return this.clientService.getAllClients(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async createClient(@Body() dto: ClientDto, @CurrentUser('id') userId: string) {
  return this.clientService.createNewClient(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateClient(
    @Body() dto: ClientDto,
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.clientService.updateClient(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteClient( @Param('id') id: string) {
    return this.clientService.deleteClient(id)
  }
  }

 