import { Injectable } from '@nestjs/common';

import { RegistrationFormBase } from '@banx/registration/form/common';

import { PasswordService } from '../../passwords/password.service';
import { UserEntity } from '../../users/user.entity';
import { UserService } from '../../users/user.service';
import { RegistrationFormService } from '../form/registration-form.service';

@Injectable()
export class RegistrationUserService {
  constructor(
    private readonly userService: UserService,
    private readonly registrationFormService: RegistrationFormService,
    private readonly passwordService: PasswordService
  ) {}

  async registerUser(process: string): Promise<UserEntity> {
    const data: Partial<RegistrationFormBase> = await this.registrationFormService.getForm(process);

    const password = this.passwordService.generatePassword();
    // NOTE: DON'T USE IT ON PRODUCTION.
    console.log(password);
    const hash = await this.passwordService.getHash(password);

    return this.userService.createUser({
      email: data.email,
      birthdate: data.birthdate,
      phone: data.mobilePhone,
      username: data.mobilePhone,
      password: hash,
    });
  }
}
