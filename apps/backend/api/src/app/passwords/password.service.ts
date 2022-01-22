import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class PasswordService {
  /**
   * Salt rounds
   *
   * @see https://github.com/kelektiv/node.bcrypt.js#readme
   */
  private saltRounds = 10;

  /**
   * Generating a new password
   */
  generatePassword(): string {
    return (Math.random() + 1).toString(36).substring(4);
  }

  /**
   * Return hash
   *
   * @param password Plain password
   */
  getHash(password: string): Promise<string> {
    return hash(password, this.saltRounds);
  }

  /**
   * Compare plain password with password hash
   *
   * @param password Plain password
   * @param passwordHash Password hash
   */
  compareHash(password: string, passwordHash: string): Promise<boolean> {
    return compare(password, passwordHash);
  }
}
