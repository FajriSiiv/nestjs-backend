import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,
    BooksModule,
    MongooseModule.forRoot('mongodb://localhost:27017/books-nestjs'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}