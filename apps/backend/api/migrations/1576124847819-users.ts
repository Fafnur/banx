import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Insert user with
 * username: admin
 * password: 123456
 */
export class Users1576124847819 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      INSERT INTO users (username, email, phone, password, birthdate)
      VALUES ('alex', 'example@example.com', '9230000000', '$2b$10$A4x21zZO7IKU59ScZNozee7ndO1MXcDXkaZ8h3oTI65D7qRPDatTO', '1992-02-02');
    `);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM users WHERE username = 'admin';`);
  }
}
