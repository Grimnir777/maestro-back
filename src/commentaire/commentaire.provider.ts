import { Connection } from 'mongoose';
import { CommentaireSchema } from '../schemas/commentaire.schema';

export const commentairesProviders = [
  {
    provide: 'COMMENTAIRE_MODEL',
    useFactory: (connection: Connection) => connection.model('Commentaire', CommentaireSchema),
    inject: ['DATABASE_CONNECTION']
  },
];