/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateNoteRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  content: number;

  @IsString()
  creator: string; 
}
