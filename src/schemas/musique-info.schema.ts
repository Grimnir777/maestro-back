import * as mongoose from 'mongoose';

export const MusiqueInfoSchema = new mongoose.Schema({
  name: String,
  artiste: String,
  url: String
});