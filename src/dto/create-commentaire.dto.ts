import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateCommentaireDto extends Document {
    @IsString()
    readonly idUser: String;

    @IsString()
    readonly idPartition: String;

    @IsString()
    readonly text: String;
}