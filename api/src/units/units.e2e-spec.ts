import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UnitsModule } from './units.module';
import { UnitsSeed } from '../../migrations/seeds/unit';
import { getTypeOrmConfig } from '../../config/ormconfig';

describe('Units', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [getTypeOrmConfig(), UnitsModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET units`, () => {
    return request(app.getHttpServer())
      .get('/units')
      .expect(200)
      .expect(UnitsSeed);
  });

  afterAll(async () => {
    await app.close();
  });
});
