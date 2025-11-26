import { MigrationInterface, QueryRunner } from "typeorm";

export class CriacaoEntidades1764116036760 implements MigrationInterface {
    name = 'CriacaoEntidades1764116036760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enrollment\` (\`id\` int NOT NULL, \`studantName\` varchar(255) NOT NULL, \`studantEmail\` varchar(255) NOT NULL, \`studantCpf\` varchar(255) NOT NULL, \`studantPhone\` varchar(255) NOT NULL, \`birthDate\` datetime NOT NULL, \`course_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`collaborator\` (\`id\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password_hash\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`enrollment\` ADD CONSTRAINT \`FK_dd1ce01d1164c8bbdda052ced74\` FOREIGN KEY (\`course_id\`) REFERENCES \`course\`(\`id\`) ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`enrollment\` DROP FOREIGN KEY \`FK_dd1ce01d1164c8bbdda052ced74\``);
        await queryRunner.query(`DROP TABLE \`collaborator\``);
        await queryRunner.query(`DROP TABLE \`enrollment\``);
        await queryRunner.query(`DROP TABLE \`course\``);
    }

}
