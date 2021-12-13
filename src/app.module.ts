import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [BreedsModule, MongooseModule.forRoot('mongodb://localhost:2717/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
