import { Controller, Get } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller()
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  getAll(): string {
    return this.noteService.getAll();
  }
}
