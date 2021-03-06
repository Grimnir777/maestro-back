import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  mail: {type: String, unique: true, required: true},
  pseudo: {type: String, unique: true, required: true},
  password: String,
  typeUser: String,
});
