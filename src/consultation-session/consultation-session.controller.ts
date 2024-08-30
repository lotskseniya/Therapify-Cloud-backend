import { Controller, Get, Post, Body, Param, Delete, ValidationPipe, HttpCode, Put, UsePipes } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ConsultationSessionService } from './consultation-session.service';
import { ConsultationSessionDto } from './dto/consultation-session.dto'; 
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user/sessions')
export class ConsultationSessionController {
  constructor(private readonly consultationSessionService: ConsultationSessionService) {}
 
  @Get('today-session')
  @Auth()
  async getTodaySession(@CurrentUser('id') userId: string) {
    return this.consultationSessionService.getTodaySession(userId)
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async createNewSession(@CurrentUser('id') userId: string) {
    return this.consultationSessionService.createNewSession(userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/round/:id')
  @Auth()
  async updateRound(@Param('id') id: string, @Body() dto: ConsultationSessionDto) {
    return this.consultationSessionService.updateRound(dto, id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateSession(
    @Body() dto: ConsultationSessionDto,
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.consultationSessionService.updateSession(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteSession(
    @Param('id') id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.consultationSessionService.deleteSession(id, userId)
  }
}