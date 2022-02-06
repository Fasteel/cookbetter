import { MigrationInterface, QueryRunner } from 'typeorm';
import { UnitsSeed } from './seeds/unit';

export class units1644154055092 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('unit')
      .values(UnitsSeed)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
