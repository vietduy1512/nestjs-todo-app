import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): string {
    return this.todoService.getAll();
  }
}
