import { Controller, Get, Post, Body, Param, Delete, ValidationPipe, HttpCode, Put, UsePipes } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { SessionDurationService } from './session-duration.service';
import { SessionDurationDto } from './dto/session-duration.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user/settings')
export class SessionDurationController {
  constructor(private readonly sessionDurationService: SessionDurationService) {}

  @Get('user-settings')
  @Auth()
  async getDurationSettings(@CurrentUser('id') userId: string) {
    return this.sessionDurationService.getDurationSettings(userId)
  }


  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async createNewDurationSettings(
    @Body() dto: SessionDurationDto, 
    @CurrentUser('id') userId: string
  ) {
    return this.sessionDurationService.createNewDurationSettings(userId, dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateDurationSettings(
    @Body() dto: SessionDurationDto,
    @CurrentUser('id') userId: string,
    @Param('id') sessionDurationId: string
  ) {
    return this.sessionDurationService.updateDurationSettings(dto, sessionDurationId, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteDurationSettings(
    @Param('id') sessionDurationId: string,
    @CurrentUser('id') userId: string
  ) {
    return this.sessionDurationService.deleteDurationSetting(sessionDurationId, userId)
  }
}