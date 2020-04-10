import { Document } from 'mongoose';

export interface MusiqueInfo extends Document {
    readonly name: String;
    readonly artiste: String;
    readonly url: String;
}