import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Company } from '@app/entity/company.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      username: process.env.POSTGRES_USER || 'postgres',
      entities: [Company],
      database: process.env.POSTGRES_DB || 'postgres',
      synchronize: false,
      logging: false,
    }),
    TypeOrmModule.forFeature([Company]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
