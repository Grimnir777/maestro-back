import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  mail: {type: String, unique: true},
  pseudo: {type: String, unique: true},
  password: String,
  typeUser: String,
});