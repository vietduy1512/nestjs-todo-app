import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todosRepository.findOne(id);
  }

  async create({ title, content }: TodoDto): Promise<Todo> {
    const todo = await this.todosRepository.create({
      title: title,
      content: content,
      isEnable: true
    });
    return await this.todosRepository.save(todo);
  }

  async remove(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
