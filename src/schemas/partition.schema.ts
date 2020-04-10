import * as mongoose from 'mongoose';

export const PartitionSchema = new mongoose.Schema({
    author: String,
    title: String,
    difficulty: String,
    linkPart: String,
    instrument: [{nom: String}],
    comments: [{ idUser: String, pseudoUser: String, text: String, date: Date }]
});
