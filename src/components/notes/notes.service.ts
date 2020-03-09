import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  getAll(): string {
    return 'This is Note!';
  }
}
