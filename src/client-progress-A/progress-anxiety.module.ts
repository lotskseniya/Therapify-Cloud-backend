import { Module } from '@nestjs/common';


import { PrismaService } from '../prisma.service';
import { ProgressAnxietyService } from './progress-anxiety.service';
import { ProgressAnxietyController } from './progress-anxiety.controller';

@Module({
  controllers: [ProgressAnxietyController],
  providers: [ProgressAnxietyService, PrismaService],
  exports: [ProgressAnxietyService],
})
export class ProgressAnxietyModule {}
