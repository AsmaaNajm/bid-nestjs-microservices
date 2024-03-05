import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from '@app/dto/create-company.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

  @Post('/register')
  async register(@Body() createComapnyDto: CreateCompanyDto) {
    return await this.companyService.register(createComapnyDto);
  }
}
