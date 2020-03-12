import * as mongoose from 'mongoose';

export const TicketSchema = new mongoose.Schema({
  title: String,
  information: String,
  state: String,
  idPartition: String,
  idUser: String,
});