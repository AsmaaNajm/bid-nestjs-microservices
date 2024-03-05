import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import '@app/config/dotenv.config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [process.env.KAFKA_BROKER0, process.env.KAFKA_BROKER1],
        },
        consumer: {
          groupId: 'company-consumer',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
