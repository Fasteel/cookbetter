import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UnitsModule } from './units/units.module';
import { getTypeOrmConfig } from '../config/ormconfig';

@Module({
  imports: [getTypeOrmConfig(), UnitsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
