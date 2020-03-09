import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteService {
  getAll(): string {
    return 'This is Note!';
  }
}
