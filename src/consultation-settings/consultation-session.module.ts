import { Module } from '@nestjs/common';
import { SessionDurationService } from './session-duration.service';
import { SessionDurationController } from './session-duration.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [SessionDurationController],
  providers: [SessionDurationService, PrismaService],
  exports: [SessionDurationService],
})
export class SessionSettingsModule {}
