import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule, AuthModule } from '@app/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NotesRepository } from './notes.repository';
import { Note, noteschema } from './schemas/notes.schema';
import { UPDATE_SERVICE } from './constants/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/notes/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Note.name, schema: noteschema }]),
    RmqModule.register({
      name: UPDATE_SERVICE,
    }),
    AuthModule,
  ],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class notesModule {}
