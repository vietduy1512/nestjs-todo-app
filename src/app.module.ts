import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { NotesModule } from './components/notes/notes.module';
import { TodosModule } from './components/todos/todos.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotesModule,
    TodosModule
  ]
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    console.log(this.connection);
    consumer
      .apply(LoggerMiddleware)
      //.forRoutes('todos');    //restricted to said route only
  }
}
