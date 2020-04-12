import { Document } from 'mongoose';

export enum UserType {
    admin = 'admin',
    user = 'user'
}

export interface User extends Document {
    name: String;
    lastname: String;
    mail: {type: String, unique: true};
    pseudo: {type: String, unique: true};
    password: String;
    typeUser: UserType;
}
