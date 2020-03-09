import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getAll(): string {
    return 'This is Todo!';
  }
}
