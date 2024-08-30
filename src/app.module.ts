import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { TimeBlockModule } from './time-block/time-block.module';
import { ConsultationSessionModule } from './consultation-session/consultation-session.module';
import { SessionSettingsModule } from './consultation-settings/consultation-session.module';
import { ProgressAnxietyModule } from './client-progress-A/progress-anxiety.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, ClientModule, TimeBlockModule, SessionSettingsModule, ConsultationSessionModule, ProgressAnxietyModule],
})
export class AppModule {}
