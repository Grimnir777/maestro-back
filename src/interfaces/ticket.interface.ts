import { Document } from 'mongoose';

export enum State {
    close = 'close',
    open = 'open'
}

export interface Ticket extends Document {
    readonly title: String;
    readonly information: String;
    readonly state: State;
    readonly idPartition: String;
    readonly idUser: String;
}
