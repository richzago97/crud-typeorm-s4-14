import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1665514535384 implements MigrationInterface {
    name = 'createTables1665514535384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "updatedA" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "updatedAt" TO "updatedA"`);
    }

}
