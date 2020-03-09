import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getAll(): string {
    return 'This is Todo!';
  }
}
