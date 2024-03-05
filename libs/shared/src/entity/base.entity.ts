import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

export abstract class AbstractBaseEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @AutoMap()
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @AutoMap()
  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt?: Date;
}
