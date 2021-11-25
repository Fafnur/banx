export enum RegistrationFormKeys {
  Form = 'registrationForm',
}

export type RegistrationForm<K extends Record<string, any> = Record<string, any>> = K;

export interface RegistrationFormCreate {
  form: RegistrationForm;
  additional: Record<string, any>;
}

export interface RegistrationFormFieldValidate<F extends string = string, V = any> {
  field: F;
  value: V;
  subStep?: string;
}

export interface RegistrationFormValidate<F extends Record<string, any> = Record<string, any>> {
  form: Partial<F>;
  subStep?: string;
}

export type RegistrationFormValidateErrors<K extends keyof Record<string, any> = keyof Record<string, any>> = Partial<Record<K, string[]>>;

export interface RegistrationFormRestore {
  form: RegistrationForm | null;
}

// Registration Form Fields

export enum RegistrationGender {
  Male = 'male',
  Female = 'female',
  Transgender = 'transgender',
}
export const REGISTRATION_GENDERS: RegistrationGender[] = [
  RegistrationGender.Male,
  RegistrationGender.Female,
  RegistrationGender.Transgender,
];

export enum RegistrationMaritalStatus {
  Married = 'married',
  Single = 'single',
  Divorced = 'divorced',
  Widower = 'widow_widower',
}

export const REGISTRATION_MARITAL_STATUSES: RegistrationMaritalStatus[] = [
  RegistrationMaritalStatus.Married,
  RegistrationMaritalStatus.Divorced,
  RegistrationMaritalStatus.Single,
  RegistrationMaritalStatus.Widower,
];

export enum RegistrationKidsAmount {
  None = 'none',
  One = 'one',
  Two = 'two',
  Three = 'three',
  FourAndMore = 'four_and_more',
}

export const REGISTRATION_KIDS_AMOUNTS: RegistrationKidsAmount[] = [
  RegistrationKidsAmount.None,
  RegistrationKidsAmount.One,
  RegistrationKidsAmount.Two,
  RegistrationKidsAmount.Three,
  RegistrationKidsAmount.FourAndMore,
];

export enum RegistrationDependentsAmount {
  None = 'none',
  One = 'one',
  Two = 'two',
  Three = 'three',
  FourAndMore = 'four_and_more',
}

export const REGISTRATION_DEPENDENTS_AMOUNTS: RegistrationDependentsAmount[] = [
  RegistrationDependentsAmount.None,
  RegistrationDependentsAmount.One,
  RegistrationDependentsAmount.Two,
  RegistrationDependentsAmount.Three,
  RegistrationDependentsAmount.FourAndMore,
];

export enum RegistrationAdditionalContactType {
  Sibling = 'sister_brother',
  Colleague = 'coworker',
  Parent = 'parent',
  Friend = 'friend',
  Spouse = 'spouse',
}

export const REGISTRATION_ADDITIONAL_CONTACT_TYPES: RegistrationAdditionalContactType[] = [
  RegistrationAdditionalContactType.Spouse,
  RegistrationAdditionalContactType.Sibling,
  RegistrationAdditionalContactType.Friend,
  RegistrationAdditionalContactType.Colleague,
  RegistrationAdditionalContactType.Parent,
];

export enum RegistrationEmploymentType {
  FullTime = 'full_time',
  PartTime = 'part_time',
  Retired = 'retired',
  Unemployed = 'unemployed',
  Student = 'student',
  SelfEmployed = 'self_employed',
  Other = 'other',
}

export const REGISTRATION_EMPLOYMENT_TYPES: RegistrationEmploymentType[] = [
  RegistrationEmploymentType.FullTime,
  RegistrationEmploymentType.PartTime,
  RegistrationEmploymentType.Retired,
  RegistrationEmploymentType.Unemployed,
  RegistrationEmploymentType.Student,
  RegistrationEmploymentType.SelfEmployed,
  RegistrationEmploymentType.Other,
];

export enum RegistrationPeriodOfEmployment {
  LessThanMonth = 'less_than_month',
  OneThreeMonths = 'one_three_months',
  ThreeTwelveMonths = 'three_twelve_months',
  MoreThanTwelveMonths = 'more_than_twelve_months',
}

export const REGISTRATION_PERIOD_OF_EMPLOYMENTS: RegistrationPeriodOfEmployment[] = [
  RegistrationPeriodOfEmployment.LessThanMonth,
  RegistrationPeriodOfEmployment.OneThreeMonths,
  RegistrationPeriodOfEmployment.ThreeTwelveMonths,
  RegistrationPeriodOfEmployment.MoreThanTwelveMonths,
];

export enum RegistrationHomeType {
  WithFamily = 'with_family',
  Rent = 'rent',
  OwnProperty = 'own_property',
  PayingGuest = 'paying_guest',
  WithFriend = 'with_friend',
}

export const REGISTRATION_HOME_TYPES: RegistrationHomeType[] = [
  RegistrationHomeType.WithFamily,
  RegistrationHomeType.Rent,
  RegistrationHomeType.OwnProperty,
  RegistrationHomeType.PayingGuest,
  RegistrationHomeType.WithFriend,
];

export enum RegistrationFormField {
  Gender = 'gender',
  FirstName = 'firstName',
  LastName = 'lastName',
  MiddleName = 'middleName',
  Birthdate = 'birthdate',
  MobilePhone = 'mobilePhone',
  Email = 'email',
  Agreement = 'agreement',
  MaritalStatus = 'maritalStatus',
  KidsAmount = 'kidsAmount',
  DependentsAmount = 'dependentsAmount',
  AdditionalContactName = 'additionalContactName',
  AdditionalContactPhoneNumber = 'additionalContactPhoneNumber',
  AdditionalContactType = 'additionalContactType',
  EmploymentType = 'employmentType',
  PeriodOfEmployment = 'periodOfEmployment',
  PeriodOfUnemployment = 'periodOfUnemployment',
  EmployerName = 'employerName',
  InstitutionName = 'institutionName',
  JobDescription = 'jobDescription',
  InstitutionDepartmentName = 'institutionDepartmentName',
  MonthlyIncome = 'monthlyIncome',
  DriverLicense = 'driverLicense',
  OwnCar = 'ownCar',
  AdditionalIncomeAmount = 'additionalIncomeAmount',
  MinimalDesiredAmount = 'minimalDesiredAmount',
  City = 'city',
  HomeType = 'homeType',
  Postcode = 'postcode',
  AddressLine = 'addressLine',
  SmsCode = 'smsCode',
}

export interface RegistrationFormBase {
  [RegistrationFormField.Gender]: RegistrationGender;
  [RegistrationFormField.FirstName]: string;
  [RegistrationFormField.LastName]: string;
  [RegistrationFormField.MiddleName]?: string | null;
  [RegistrationFormField.Birthdate]: string;
  [RegistrationFormField.MobilePhone]: string;
  [RegistrationFormField.Email]: string;
  [RegistrationFormField.Agreement]: boolean;
  [RegistrationFormField.HomeType]: RegistrationHomeType;
  [RegistrationFormField.City]: string;
  [RegistrationFormField.AddressLine]: string;
  [RegistrationFormField.Postcode]: number;
  [RegistrationFormField.MaritalStatus]: RegistrationMaritalStatus;
  [RegistrationFormField.KidsAmount]: RegistrationKidsAmount;
  [RegistrationFormField.DependentsAmount]: RegistrationDependentsAmount;
  [RegistrationFormField.AdditionalContactName]: string;
  [RegistrationFormField.AdditionalContactType]: RegistrationAdditionalContactType;
  [RegistrationFormField.AdditionalContactPhoneNumber]?: string | null;
  [RegistrationFormField.SmsCode]: number;
  [RegistrationFormField.EmploymentType]: RegistrationEmploymentType;
  [RegistrationFormField.EmployerName]: string;
  [RegistrationFormField.InstitutionName]: string;
  [RegistrationFormField.JobDescription]: string;
  [RegistrationFormField.InstitutionDepartmentName]: string;
  [RegistrationFormField.MonthlyIncome]: number;
  [RegistrationFormField.PeriodOfEmployment]: RegistrationPeriodOfEmployment;
  [RegistrationFormField.PeriodOfUnemployment]: RegistrationPeriodOfEmployment;
  [RegistrationFormField.AdditionalIncomeAmount]?: number | null;
  [RegistrationFormField.DriverLicense]: boolean;
  [RegistrationFormField.OwnCar]: boolean;
  [RegistrationFormField.MinimalDesiredAmount]: number;
}

export const REGISTRATION_FORM_FIELD_IDS: Record<RegistrationFormField, string> = {
  [RegistrationFormField.Gender]: 'Gender',
  [RegistrationFormField.FirstName]: 'FirstName',
  [RegistrationFormField.LastName]: 'LastName',
  [RegistrationFormField.MiddleName]: 'MiddleName',
  [RegistrationFormField.Birthdate]: 'Birthdate',
  [RegistrationFormField.MobilePhone]: 'MobilePhone',
  [RegistrationFormField.Email]: 'Email',
  [RegistrationFormField.Agreement]: 'Agreement',
  [RegistrationFormField.HomeType]: 'HomeType',
  [RegistrationFormField.City]: 'City',
  [RegistrationFormField.AddressLine]: 'AddressLine',
  [RegistrationFormField.Postcode]: 'Postcode',
  [RegistrationFormField.MaritalStatus]: 'MaritalStatus',
  [RegistrationFormField.KidsAmount]: 'KidsAmount',
  [RegistrationFormField.DependentsAmount]: 'DependentsAmount',
  [RegistrationFormField.AdditionalContactName]: 'AdditionalContactName',
  [RegistrationFormField.AdditionalContactType]: 'AdditionalContactType',
  [RegistrationFormField.AdditionalContactPhoneNumber]: 'AdditionalContactPhoneNumber',
  [RegistrationFormField.SmsCode]: 'SmsCode',
  [RegistrationFormField.EmploymentType]: 'EmploymentType',
  [RegistrationFormField.EmployerName]: 'EmployerName',
  [RegistrationFormField.InstitutionName]: 'InstitutionName',
  [RegistrationFormField.JobDescription]: 'JobDescription',
  [RegistrationFormField.InstitutionDepartmentName]: 'InstitutionDepartmentName',
  [RegistrationFormField.MonthlyIncome]: 'MonthlyIncome',
  [RegistrationFormField.PeriodOfEmployment]: 'PeriodOfEmployment',
  [RegistrationFormField.PeriodOfUnemployment]: 'PeriodOfUnemployment',
  [RegistrationFormField.AdditionalIncomeAmount]: 'AdditionalIncomeAmount',
  [RegistrationFormField.DriverLicense]: 'DriverLicense',
  [RegistrationFormField.OwnCar]: 'OwnCar',
  [RegistrationFormField.MinimalDesiredAmount]: 'MinimalDesiredAmount',
};
