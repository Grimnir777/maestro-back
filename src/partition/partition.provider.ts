import { Connection } from 'mongoose';
import { PartitionSchema } from '../schemas/partition.schema';

export const partitionsProviders = [
  {
    provide: 'PARTITION_MODEL',
    useFactory: (connection: Connection) => connection.model('Partition', PartitionSchema),
    inject: ['DATABASE_CONNECTION']
  },
];