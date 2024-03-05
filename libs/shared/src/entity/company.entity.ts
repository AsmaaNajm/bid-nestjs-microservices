// company.entity.ts
import { Entity, Column } from 'typeorm';
import { AbstractBaseEntity } from './base.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class Company extends AbstractBaseEntity {
  @AutoMap()
  @Column({ nullable: false })
  name: string;

  @AutoMap()
  @Column({ nullable: false })
  address: string;

  @AutoMap()
  @Column({ nullable: false })
  city: string;

  @AutoMap()
  @Column({ nullable: false })
  country: string;
}
