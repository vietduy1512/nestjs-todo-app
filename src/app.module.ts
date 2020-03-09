import { Module } from '@nestjs/common';
import { NoteController } from './components/note/note.controller';
import { NoteService } from './components/note/note.service';
import { TodoController } from './components/todo/todo.controller';
import { TodoService } from './components/todo/todo.service';

@Module({
  imports: [],
  controllers: [NoteController, TodoController],
  providers: [NoteService, TodoService],
})
export class AppModule {}
