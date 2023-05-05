/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Patch, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { CreateNoteRequest } from './dto/create-note.request';
import { NotesService } from './notes.service';
import { SentryInterceptor } from './sentry.interceptor';

@UseInterceptors(SentryInterceptor)
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createnote(@Body() request: CreateNoteRequest, @Req() req: any) {
    return this.notesService.createnote(request, req.cookies?.Authentication);
  }



  @Get()
  async getnotes() {
    return this.notesService.getnotes();
  }
}
