import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UnitsModule } from './units/units.module';
import { getTypeOrmConfig } from '../config/ormconfig';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    getTypeOrmConfig(),
    UnitsModule,
    UsersModule,
    IngredientsModule,
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
