import { RegistrationFormBase } from '@banx/registration/form/common';

export enum RussianRegistrationFormField {
  PassportSeriesNumber = 'passportSeriesNumber',
  PassportIssueCode = 'passportIssueCode',
  PassportIssueName = 'passportIssueName',
  PassportIssueDate = 'passportIssueDate',
  PassportBirthplace = 'passportBirthplace',
}

export interface RussianRegistrationForm extends RegistrationFormBase {
  [RussianRegistrationFormField.PassportSeriesNumber]: string;
  [RussianRegistrationFormField.PassportIssueCode]: string;
  [RussianRegistrationFormField.PassportIssueName]: string;
  [RussianRegistrationFormField.PassportIssueDate]: string;
  [RussianRegistrationFormField.PassportBirthplace]: string;
}
