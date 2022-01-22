import { REGISTRATION_FORM_FIELD_IDS, RegistrationFormBase, RegistrationFormField } from '@banx/registration/form/common';

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

export const RUSSIAN_REGISTRATION_FORM_FIELD_IDS: Record<RegistrationFormField | RussianRegistrationFormField, string> = {
  ...REGISTRATION_FORM_FIELD_IDS,
  [RussianRegistrationFormField.PassportSeriesNumber]: 'PassportSeriesNumber',
  [RussianRegistrationFormField.PassportIssueCode]: 'PassportIssueCode',
  [RussianRegistrationFormField.PassportIssueName]: 'PassportIssueName',
  [RussianRegistrationFormField.PassportIssueDate]: 'PassportIssueDate',
  [RussianRegistrationFormField.PassportBirthplace]: 'PassportBirthplace',
};
