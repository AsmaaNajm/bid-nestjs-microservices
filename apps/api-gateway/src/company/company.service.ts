import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateCompanyDto } from '@app/dto/create-company.dto';

@Injectable()
export class CompanyService implements OnModuleInit {
    constructor(
    @Inject('COMPANY_MICROSERVICE') private readonly client: ClientKafka) {}
    
      async register(createUserDto: CreateCompanyDto) {
        return this.client.send('register-user', createUserDto);
      }
    
      async onModuleInit(): Promise<void> {
        this.client.subscribeToResponseOf('register-user');
        await this.client.connect();
      }
}
