import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { NotesModule } from './components/notes/notes.module';
import { TodosModule } from './components/todos/todos.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [NotesModule, TodosModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      //.forRoutes('todos');    //restricted to said route only
  }
}
