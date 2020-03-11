
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  mail: String,
  pseudo: String,
  password: String,
  typeUser: String
});