import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

export const getTypeOrmConfig = () =>
  TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  });
