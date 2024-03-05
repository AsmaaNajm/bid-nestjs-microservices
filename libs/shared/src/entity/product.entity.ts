// product.entity.ts
import { Entity, Column } from 'typeorm';
import { AbstractBaseEntity } from './base.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class Product extends AbstractBaseEntity {
  @AutoMap()
  @Column({ nullable: false })
  name: string;

  @AutoMap()
  @Column({ type: 'text' })
  description: string;

  @AutoMap()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
