import { Module } from '@nestjs/common';

import { CompanyModule } from './company/company.module';
import { FileServiceModule } from './file-service/file-service.module';

@Module({
  imports: [CompanyModule, FileServiceModule],

})
export class AppModule {}
