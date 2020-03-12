import { Document } from 'mongoose';

export interface Commentaire extends Document {
    readonly idUser: String;
    readonly idPartition: String;
    readonly text: String;
}