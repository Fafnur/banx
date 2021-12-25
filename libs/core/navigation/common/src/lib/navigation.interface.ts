import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  home: string;

  // Company
  company: string;
  companyAbout: string;
  companyNews: string;
  companyCareer: string;
  companyPoints: string;
  companyAtms: string;
  companyExchange: string;
  companyContacts: string;
  companyHelp: string;
  companySecure: string;
  companyInvestors: string;

  // Bank
  bank: string;
  bankCreditCards: string;
  bankDebitCards: string;
  bankDeposits: string;
  bankPremium: string;
  bankCashLoan: string;
  bankRefinance: string;
  bankCarLoan: string;
  bankPayments: string;

  // Business
  business: string;
  businessAccount: string;
  businessRegistration: string;
  businessPremium: string;
  businessPayments: string;
  businessLoans: string;
  businessProcurement: string;
  businessSales: string;
  businessAccounting: string;

  // Invest
  invest: string;
  investFeed: string;
  investCatalog: string;
  investRecommendations: string;
  investPremium: string;
  investAccount: string;
  investPrograms: string;
  investTariffs: string;
  investAgentInvite: string;

  // Insurance
  insurance: string;
  insuranceCar: string;
  insuranceTravel: string;
  insuranceRealEstate: string;
  insuranceHealth: string;
  insuranceAccount: string;
  insuranceAgentInvite: string;

  // Travel
  travel: string;
  travelFlights: string;
  travelHotels: string;
  travelTours: string;
  travelTrains: string;
  travelCarRental: string;
  travelMap: string;

  // Entertainment
  entertainment: string;
  entertainmentMovies: string;
  entertainmentRestaurants: string;
  entertainmentConcerts: string;
  entertainmentSpectacles: string;
  entertainmentSports: string;
  entertainmentAccount: string;

  // Auth
  auth: string;
  authLogin: string;
  authRecovery: string;

  // Apps
  application: string;

  // Errors
  serverError: string;
  permissionDenied: string;

  // User
  user: string;
  userProfile: string;

  // Registration
  registration: string;
  registrationForm: string;
  registrationFormPersonal: string;
  registrationFormSms: string;
  registrationFormFamily: string;
  registrationFormEmployment: string;
  registrationFormAdditional: string;
  registrationData: string;
  registrationSocial: string;
  registrationDecision: string;
  registrationUser: string;
  registrationConversion: string;
  registrationFinish: string;

  // Other
  terms: string;
  support: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',

  company: 'company',
  companyAbout: 'company/about',
  companyNews: 'company/news',
  companyCareer: 'company/career',
  companyPoints: 'company/points',
  companyAtms: 'company/atms',
  companyExchange: 'company/exchange',
  companyContacts: 'company/contacts',
  companyHelp: 'company/help',
  companySecure: 'company/secure',
  companyInvestors: 'company/investors',

  /**
   * Alias for home
   */
  bank: '',
  bankCreditCards: 'bank/credit-cards',
  bankDebitCards: 'bank/debit-cards',
  bankDeposits: 'bank/deposits',
  bankPremium: 'bank/premium',
  bankCashLoan: 'bank/cash-loan',
  bankRefinance: 'bank/refinance',
  bankCarLoan: 'bank/car-loan',
  bankPayments: 'bank/payments',

  business: 'business',
  businessAccount: 'business/account',
  businessRegistration: 'business/registration',
  businessPremium: 'business/premium',
  businessPayments: 'business/payments',
  businessLoans: 'business/loans',
  businessProcurement: 'business/procurement',
  businessSales: 'business/sales',
  businessAccounting: 'business/accounting',

  invest: 'invest',
  investFeed: 'invest/feed',
  investCatalog: 'invest/catalog',
  investRecommendations: 'invest/recommendations',
  investPremium: 'invest/premium',
  investAccount: 'invest/account',
  investPrograms: 'invest/programs',
  investTariffs: 'invest/tariffs',
  investAgentInvite: 'invest/agent-invite',

  insurance: 'insurance',
  insuranceCar: 'insurance/car',
  insuranceTravel: 'insurance/travel',
  insuranceRealEstate: 'insurance/real-estate',
  insuranceHealth: 'insurance/health',
  insuranceAccount: 'insurance/account',
  insuranceAgentInvite: 'insurance/agent-invite',

  travel: 'travel',
  travelFlights: 'travel/flights',
  travelHotels: 'travel/hotels',
  travelTours: 'travel/tours',
  travelTrains: 'travel/trains',
  travelCarRental: 'travel/car-rental',
  travelMap: 'travel/map',

  entertainment: 'entertainment',
  entertainmentMovies: 'entertainment/movies',
  entertainmentRestaurants: 'entertainment/restaurants',
  entertainmentConcerts: 'entertainment/concerts',
  entertainmentSpectacles: 'entertainment/spectacles',
  entertainmentSports: 'entertainment/sports',
  entertainmentAccount: 'entertainment/account',

  auth: 'auth',
  authLogin: 'auth/login',
  authRecovery: 'auth/recovery',

  application: 'download/latest',

  serverError: 'server-error',
  permissionDenied: 'permission-denied',

  user: 'user',
  userProfile: 'user/profile',

  registration: 'registration',
  registrationForm: 'registration/form',
  registrationFormFamily: 'registration/form/family',
  registrationFormPersonal: 'registration/form/personal',
  registrationFormSms: 'registration/form/sms',
  registrationFormEmployment: 'registration/form/employment',
  registrationFormAdditional: 'registration/form/additional',
  registrationData: 'registration/data',
  registrationSocial: 'registration/social',
  registrationDecision: 'registration/decision',
  registrationUser: 'registration/user',
  registrationConversion: 'registration/conversion',
  registrationFinish: 'registration/finish',

  terms: 'terms',
  support: 'support',
};

export interface NavigationLink {
  route: string;
  label: string;
  params?: Record<string, any>;
}

export const PATHS = new InjectionToken<Record<string, any>>('NavigationPaths');
