import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    CompanyModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
