import { NestFactory } from '@nestjs/core';
import { FileServiceModule } from './file-service/file-service.module';
import '@app/config/dotenv.config';

async function bootstrap() {
  const app = await NestFactory.create(FileServiceModule);
  await app.listen(3000);
}
bootstrap();
