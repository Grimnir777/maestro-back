import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`mongodb://${process.env.mongoUrl}:${process.env.mongoPort}/maestro`)
      // mongoose.connect(`mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@maestro-gcuyd.mongodb.net/test?retryWrites=true&w=majority
      // Copy/maestro`)
  },
];
