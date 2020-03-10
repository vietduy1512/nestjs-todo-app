import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.todosService.findAll();
  }

  @Get(':id')
  async getById(id: number): Promise<Todo> {
    return await this.todosService.findOne(id);
  }

  @Post()
  async create(@Body() todoDto: TodoDto) {
    return await this.todosService.create(todoDto);
  }
}
