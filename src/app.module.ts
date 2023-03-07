import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsController } from './cat.controller';
import { UserModule } from './user/user.module';
@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
