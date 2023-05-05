/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { UPDATE_SERVICE } from './constants/services';
import { CreateNoteRequest } from './dto/create-note.request';
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService {
  constructor(
    private readonly NotesRepository: NotesRepository,
    @Inject(UPDATE_SERVICE) private updateClient: ClientProxy,
  ) {}

  async createnote(request: CreateNoteRequest, authentication: string) {
    const session = await this.NotesRepository.startTransaction();
    try {
      const note = await this.NotesRepository.create(request, { session });
      await lastValueFrom(
        this.updateClient.emit('notes_created', {
          request,
         Authentication: authentication,
        }),
      );
      await session.commitTransaction();
      return note;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }






  async getnotes() {
    return this.NotesRepository.find({});
  }
}
