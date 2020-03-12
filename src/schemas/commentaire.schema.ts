import * as mongoose from 'mongoose';

export const CommentaireSchema = new mongoose.Schema({
    idUser: String,
    idPartition: String,
    text: String,
});