import { Module } from '@nestjs/common';
import { NotesController } from './components/notes/notes.controller';
import { NotesService } from './components/notes/notes.service';
import { TodosController } from './components/todos/todos.controller';
import { TodosService } from './components/todos/todos.service';

@Module({
  imports: [],
  controllers: [NotesController, TodosController],
  providers: [NotesService, TodosService],
})
export class AppModule {}
