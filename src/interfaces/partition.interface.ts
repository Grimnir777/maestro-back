import { Document } from 'mongoose';

export interface Partition extends Document {
    readonly author: String;
    readonly title: String;
    readonly difficulty: String;
    readonly linkPart: String;
    readonly instrument: [{Body: String}];
}