import { Module, OnModuleInit } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule, InjectMapper } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      username: process.env.POSTGRES_USER || 'postgres',
      entities: [User],
      database: process.env.POSTGRES_DB || 'postgres',
      synchronize: true,
      logging: false,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements OnModuleInit {
  async onModuleInit() {
    console.log(
      'NestJS application initialized and connected to the database.',
    );
  }
}
