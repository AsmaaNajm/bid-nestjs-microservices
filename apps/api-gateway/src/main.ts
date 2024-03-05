import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import '@app/config/dotenv.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
