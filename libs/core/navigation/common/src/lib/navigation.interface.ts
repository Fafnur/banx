import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  // Bank
  home: string;
  serviceCreditCards: string;
  serviceDebitCards: string;
  serviceDeposits: string;
  servicePremium: string;
  serviceCashLoan: string;
  serviceRefinance: string;
  serviceCarLoan: string;
  servicePayments: string;

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

  // Apps
  application: string;

  // Errors
  serverError: string;
  permissionDenied: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',
  serviceCreditCards: 'services/credit-cards',
  serviceDebitCards: 'services/debit-cards',
  serviceDeposits: 'services/deposits',
  servicePremium: 'services/premium',
  serviceCashLoan: 'services/cash-loan',
  serviceRefinance: 'services/refinance',
  serviceCarLoan: 'services/car-loan',
  servicePayments: 'services/payments',

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

  application: '/download/latest',

  serverError: 'server-error',
  permissionDenied: 'permission-denied',
};

export interface NavigationLink {
  route: string;
  label: string;
  params?: Record<string, any>;
}

export const PATHS = new InjectionToken<Record<string, any>>('NavigationPaths');
