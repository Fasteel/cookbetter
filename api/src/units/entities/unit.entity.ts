import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  unitId: number;

  @Column()
  label: string;
}
