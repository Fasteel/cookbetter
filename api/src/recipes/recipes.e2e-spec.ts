import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getTypeOrmConfig } from '../../config/ormconfig';
import { UnitsSeed } from '../../migrations/seeds/unit';
import * as request from 'supertest';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesModule } from './recipes.module';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { UnitsModule } from '../units/units.module';

describe('Recipes', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        getTypeOrmConfig(),
        RecipesModule,
        IngredientsModule,
        UnitsModule,
      ],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST recipes`, async () => {
    const payload: CreateRecipeDto = {
      label: 'Purée',
      ingredients: [
        {
          label: 'Patate',
          amount: 300,
          unit: UnitsSeed.find((v) => v.label === 'l'),
        },
      ],
    };

    const res = await request(app.getHttpServer())
      .post('/recipes')
      .send(payload)
      .expect(201);

    expect(res.body.id).toBeDefined();
    expect(res.body.label).toEqual('Purée');
    expect(res.body.ingredients[0].label).toEqual('Patate');
    expect(res.body.ingredients[0].amount).toEqual(300);
    expect(res.body.ingredients[0].unit).toEqual(
      UnitsSeed.find((v) => v.label === 'l'),
    );
  });

  afterAll(async () => {
    await app.close();
  });
});
