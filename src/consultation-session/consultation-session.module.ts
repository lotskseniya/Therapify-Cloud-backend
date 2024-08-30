import { Module } from '@nestjs/common';
import { ConsultationSessionService } from './consultation-session.service';
import { ConsultationSessionController } from './consultation-session.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ConsultationSessionController],
  providers: [ConsultationSessionService, PrismaService],
  exports: [ConsultationSessionService],
})
export class ConsultationSessionModule {}
