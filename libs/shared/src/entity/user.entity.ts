import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractBaseEntity } from './base.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class User extends AbstractBaseEntity {

  @AutoMap()
  @Column({ nullable: false })
  firstName: string;

  @AutoMap()
  @Column({ nullable: false })
  lastName: string;


  @Column()
  @AutoMap()
  username: string;

  @Column()
  @AutoMap()
  email: string;

  @Column()
  password: string;

  @Column()
  refreshToken: string;
}
