import { Model, STATES } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Commentaire } from '../interfaces/commentaire.interface';
import { CreateCommentaireDto } from '../dto/create-commentaire.dto';

@Injectable()
export class CommentairesService {
  constructor(
    @Inject('COMMENTAIRE_MODEL')
    private readonly commentaireModel: Model<Commentaire>,
  ) {}

  async create(ticket: CreateCommentaireDto): Promise<Commentaire> {
    const createdCommentaire = new this.commentaireModel(ticket);
    return createdCommentaire.save();
  }

  async findById(id: string): Promise<Commentaire>{
    return this.commentaireModel.findById(id);
  }

  async findAll(): Promise<Commentaire[]> {
    return this.commentaireModel.find();
  }

  async update(commentaire: CreateCommentaireDto): Promise<Commentaire> {
    const commentaireToUpdate = this.findById(commentaire.id);
    return (await commentaireToUpdate).update(commentaire);
  }

  async deleteById(id: string): Promise<any>{
    return this.commentaireModel.findByIdAndRemove(id);
  }
}