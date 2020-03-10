import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Todo {
  @ObjectIdColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: true })
  isEnable: boolean;
}