import { Document } from 'mongoose';

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
}
