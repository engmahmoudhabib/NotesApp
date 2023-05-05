import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Note extends AbstractDocument {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  creator: string;
}

export const noteschema = SchemaFactory.createForClass(Note);
