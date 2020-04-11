import { Document } from 'mongoose';
import { Commentaire } from './commentaire.interface';

export enum Difficulty {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard', 
    extreme = 'extreme'
}

export interface Partition extends Document {
    readonly author: String;
    readonly title: String;
    readonly difficulty: Difficulty;
    readonly linkPart: String;
    readonly instrument: [{Body: String}];
    readonly comments: [Commentaire];
}
