import { Document } from 'mongoose';

export interface User extends Document {
    readonly name: String;
    readonly lastname: String;
    readonly mail: String;
    readonly pseudo: String;
    readonly password: String;
    readonly typeUser: String;
}