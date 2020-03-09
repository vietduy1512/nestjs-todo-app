import { Test, TestingModule } from '@nestjs/testing';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

describe('NoteController', () => {
  let noteController: NoteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NoteController],
      providers: [NoteService],
    }).compile();

    noteController = app.get<NoteController>(NoteController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(noteController.getAll()).toBe('Hello World!');
    });
  });
});
