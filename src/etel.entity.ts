/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Etel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nev: string;

  @Column()
  kaloria: number;
}
