import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    JwtModule.register({}),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      username: process.env.POSTGRES_USER || 'postgres',
      entities: [User],
      database: process.env.POSTGRES_DB || 'postgres',
      synchronize: false,
      logging: false,
    }),
    TypeOrmModule.forFeature([User]),
    ClientsModule.register([
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user-service',
            brokers: [process.env.KAFKA_BROKER0, process.env.KAFKA_BROKER1],
          },
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [],
  providers: [JwtService],
})
export class AppModule {}
