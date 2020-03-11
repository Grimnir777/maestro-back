import { Document } from 'mongoose';

export interface Ticket extends Document {
    readonly title: String;
    readonly information: String;
    readonly state: String;
}