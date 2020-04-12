import { Connection } from 'mongoose';
import { MusiqueInfoSchema } from '../schemas/musique-info.schema';

export const musiqueInfoProviders = [
  {
    provide: 'MUSIQUE-INFO_MODEL',
    useFactory: (connection: Connection) => connection.model('MusiqueInfo', MusiqueInfoSchema),
    inject: ['DATABASE_CONNECTION']
  },
];