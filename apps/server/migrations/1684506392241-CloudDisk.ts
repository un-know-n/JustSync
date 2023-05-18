import { MigrationInterface, QueryRunner } from "typeorm";

export class CloudDisk1684506392241 implements MigrationInterface {
    name = 'CloudDisk1684506392241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" text NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "password" text NOT NULL, "avatar" text NOT NULL DEFAULT '', "diskSpace" integer NOT NULL DEFAULT '10240', "spaceUsed" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
