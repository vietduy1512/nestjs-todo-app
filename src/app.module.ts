import { Module } from '@nestjs/common';
import { NoteController } from './components/note/note.controller';
import { NoteService } from './components/note/note.service';

@Module({
  imports: [],
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}
