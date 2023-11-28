import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableProduct1675766857443 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public.product (
        id SERIAL PRIMARY KEY,
        category_id integer NOT NULL,
        name character varying NOT NULL,
        description character varying NOT NULL,
        price double precision NOT NULL,
        image character varying NOT NULL,
        created_at timestamp without time zone DEFAULT now() NOT NULL,
        updated_at timestamp without time zone DEFAULT now() NOT NULL,
        foreign key (category_id) references public.category(id) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE public.product;
    `);
  }
}
