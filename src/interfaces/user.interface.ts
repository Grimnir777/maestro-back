import { Document } from 'mongoose';

export enum UserType {
    admin = 'admin',
    user = 'user'
}

export interface User extends Document {
    readonly name: String;
    readonly lastname: String;
    readonly mail: {type: String, unique: true};
    readonly pseudo: {type: String, unique: true};
    readonly password: String;
    typeUser: UserType;
}
