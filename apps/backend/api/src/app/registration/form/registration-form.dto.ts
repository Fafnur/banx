import { IsBoolean, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, Length, ValidateIf } from 'class-validator';

import {
  RegistrationAdditionalContactType,
  RegistrationDependentsAmount,
  RegistrationEmploymentType,
  RegistrationErrorCode,
  RegistrationGender,
  RegistrationHomeType,
  RegistrationKidsAmount,
  RegistrationMaritalStatus,
  RegistrationPeriodOfEmployment,
} from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { RussianRegistrationForm } from '@banx/russian/registration/form/common';

export class RegistrationFormDto implements Partial<Omit<RussianRegistrationForm, 'smsCode'>> {
  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(6, 60, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  firstName!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(6, 60, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  lastName!: string;

  @IsOptional({
    context: { errorCode: RegistrationErrorCode.IsOptional },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(1, 60, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  middleName!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsEnum(RegistrationGender, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Personal],
  })
  gender!: RegistrationGender;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsDateString({
    context: { errorCode: RegistrationErrorCode.IsDateString },
    groups: [RegistrationFormSubSteps.Personal],
  })
  birthdate!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(10, 10, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  mobilePhone!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsEmail(undefined, {
    context: { errorCode: RegistrationErrorCode.IsEmail },
    groups: [RegistrationFormSubSteps.Personal],
  })
  email!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsBoolean({
    context: { errorCode: RegistrationErrorCode.IsBoolean },
    groups: [RegistrationFormSubSteps.Personal],
  })
  agreement!: boolean;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(11, 11, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportSeriesNumber!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(7, 7, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportIssueCode!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportIssueName!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @IsDateString({
    context: { errorCode: RegistrationErrorCode.IsDateString },
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportIssueDate!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Personal],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Personal],
  })
  passportBirthplace!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @IsEnum(RegistrationHomeType, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Family],
  })
  homeType!: RegistrationHomeType;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Family],
  })
  city!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Family],
  })
  addressLine!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @Length(6, 6, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Family],
  })
  postcode!: number;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @IsEnum(RegistrationMaritalStatus, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Family],
  })
  maritalStatus!: RegistrationMaritalStatus;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @IsEnum(RegistrationKidsAmount, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Family],
  })
  kidsAmount!: RegistrationKidsAmount;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @IsEnum(RegistrationDependentsAmount, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Family],
  })
  dependentsAmount!: RegistrationDependentsAmount;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @Length(1, 60, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Family],
  })
  additionalContactName!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @IsEnum(RegistrationAdditionalContactType, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Family],
  })
  additionalContactType!: RegistrationAdditionalContactType;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Family],
  })
  @Length(10, 10, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Family],
  })
  additionalContactPhoneNumber!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @IsEnum(RegistrationEmploymentType, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Employment],
  })
  employmentType!: RegistrationEmploymentType;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Employment],
  })
  employerName!: string;

  @ValidateIf((o) => o.employmentType === RegistrationEmploymentType.Student)
  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Employment],
  })
  institutionName!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Employment],
  })
  jobDescription!: string;

  @ValidateIf((o) => o.employmentType === RegistrationEmploymentType.Student)
  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Employment],
  })
  institutionDepartmentName!: string;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Employment],
  })
  monthlyIncome!: number;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @IsEnum(RegistrationPeriodOfEmployment, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Employment],
  })
  periodOfEmployment!: RegistrationPeriodOfEmployment;

  @ValidateIf((o) => o.employmentType === RegistrationEmploymentType.Unemployed)
  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @IsEnum(RegistrationPeriodOfEmployment, {
    context: { errorCode: RegistrationErrorCode.IsEnum },
    groups: [RegistrationFormSubSteps.Employment],
  })
  periodOfUnemployment!: RegistrationPeriodOfEmployment;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Employment],
  })
  @Length(1, 256, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Employment],
  })
  additionalIncomeAmount!: number;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Additional],
  })
  @IsBoolean({
    context: { errorCode: RegistrationErrorCode.IsBoolean },
    groups: [RegistrationFormSubSteps.Additional],
  })
  driverLicense!: boolean;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Additional],
  })
  @IsBoolean({
    context: { errorCode: RegistrationErrorCode.IsBoolean },
    groups: [RegistrationFormSubSteps.Additional],
  })
  ownCar!: boolean;

  @IsNotEmpty({
    context: { errorCode: RegistrationErrorCode.IsNotEmpty },
    groups: [RegistrationFormSubSteps.Additional],
  })
  @Length(1, 16, {
    context: { errorCode: RegistrationErrorCode.IsLength },
    groups: [RegistrationFormSubSteps.Employment],
  })
  minimalDesiredAmount!: number;
}
