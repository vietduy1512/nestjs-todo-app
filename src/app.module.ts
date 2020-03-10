import { Module } from '@nestjs/common';
import { NotesModule } from './components/notes/notes.module';
import { TodosModule } from './components/todos/todos.module';

@Module({
  imports: [NotesModule, TodosModule]
})
export class AppModule {}
