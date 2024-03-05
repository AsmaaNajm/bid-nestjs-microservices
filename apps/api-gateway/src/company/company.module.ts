import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMPANY_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'company-service',
            brokers: [process.env.KAFKA_BROKER0, process.env.KAFKA_BROKER1],
          },
          consumer: {
            groupId: 'company-consumer',
          },
        },
      },
    ]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
