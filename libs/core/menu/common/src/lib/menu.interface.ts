import { InjectionToken } from '@angular/core';

import { NAVIGATION_PATHS, NavigationLink } from '@banx/core/navigation/common';

export interface MenuLink extends NavigationLink {
  hide?: boolean;
  parent?: string;
  children?: MenuLink[];
}

export const MENU = new InjectionToken<MenuLink[]>('MenuLinks');

export const MENU_DEFAULT: MenuLink[] = [
  {
    hide: true,
    route: NAVIGATION_PATHS.company,
    label: $localize`:Menu company|:Company`,
    children: [
      {
        route: NAVIGATION_PATHS.companyAbout,
        label: $localize`:Menu company|:About`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyNews,
        label: $localize`:Menu company|:News`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyCareer,
        label: $localize`:Menu company|:Career`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyPoints,
        label: $localize`:Menu company|:Points`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyAtms,
        label: $localize`:Menu company|:ATMs`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyExchange,
        label: $localize`:Menu company|:Exchange`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyContacts,
        label: $localize`:Menu company|:Contacts`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyHelp,
        label: $localize`:Menu company|:Help`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companySecure,
        label: $localize`:Menu company|:Secure`,
        parent: NAVIGATION_PATHS.company,
      },
      {
        route: NAVIGATION_PATHS.companyInvestors,
        label: $localize`:Menu company|:For investors`,
        parent: NAVIGATION_PATHS.company,
      },
    ],
  },

  {
    route: NAVIGATION_PATHS.bank,
    label: $localize`:Menu bank|:Bank`,
    children: [
      {
        route: NAVIGATION_PATHS.bankCreditCards,
        label: $localize`:Menu bank|:Credit cards`,
        parent: NAVIGATION_PATHS.bank,
      },
      {
        route: NAVIGATION_PATHS.bankDebitCards,
        label: $localize`:Menu bank|:Debit cards`,
        parent: NAVIGATION_PATHS.bank,
      },
      {
        route: NAVIGATION_PATHS.bankPremium,
        label: $localize`:Menu bank|:Premium`,
        parent: NAVIGATION_PATHS.bank,
      },
      {
        route: NAVIGATION_PATHS.bankCashLoan,
        label: $localize`:Menu bank|:Cash loan`,
        parent: NAVIGATION_PATHS.bank,
      },
      {
        route: NAVIGATION_PATHS.bankRefinance,
        label: $localize`:Menu bank|:Refinance`,
        parent: NAVIGATION_PATHS.bank,
      },
      {
        route: NAVIGATION_PATHS.bankCarLoan,
        label: $localize`:Menu bank|:Car loan`,
        parent: NAVIGATION_PATHS.bank,
      },
      {
        route: NAVIGATION_PATHS.bankDeposits,
        label: $localize`:Menu bank|:Deposits`,
        parent: NAVIGATION_PATHS.bank,
      },
      {
        route: NAVIGATION_PATHS.bankPayments,
        label: $localize`:Menu bank|:Payments`,
        parent: NAVIGATION_PATHS.bank,
      },
    ],
  },

  {
    route: NAVIGATION_PATHS.business,
    label: $localize`:Menu business|:Business`,
    children: [
      {
        route: NAVIGATION_PATHS.businessAccount,
        label: $localize`:Menu business|:Account`,
        parent: NAVIGATION_PATHS.business,
      },
      {
        route: NAVIGATION_PATHS.businessRegistration,
        label: $localize`:Menu business|:Registration`,
        parent: NAVIGATION_PATHS.business,
      },
      {
        route: NAVIGATION_PATHS.businessPremium,
        label: $localize`:Menu business|:Premium`,
        parent: NAVIGATION_PATHS.business,
      },
      {
        route: NAVIGATION_PATHS.businessPayments,
        label: $localize`:Menu business|:Payments`,
        parent: NAVIGATION_PATHS.business,
      },
      {
        route: NAVIGATION_PATHS.businessLoans,
        label: $localize`:Menu business|:Loans`,
        parent: NAVIGATION_PATHS.business,
      },
      {
        route: NAVIGATION_PATHS.businessProcurement,
        label: $localize`:Menu business|:Procurement`,
        parent: NAVIGATION_PATHS.business,
      },
      {
        route: NAVIGATION_PATHS.businessSales,
        label: $localize`:Menu business|:Sales`,
        parent: NAVIGATION_PATHS.business,
      },
      {
        route: NAVIGATION_PATHS.businessAccounting,
        label: $localize`:Menu business|:Accounting`,
        parent: NAVIGATION_PATHS.business,
      },
    ],
  },

  {
    route: NAVIGATION_PATHS.invest,
    label: $localize`:Menu invest|:Investments`,
    children: [
      {
        route: NAVIGATION_PATHS.investFeed,
        label: $localize`:Menu invest|:Feed`,
        parent: NAVIGATION_PATHS.invest,
      },
      {
        route: NAVIGATION_PATHS.investCatalog,
        label: $localize`:Menu invest|:Catalog`,
        parent: NAVIGATION_PATHS.invest,
      },
      {
        route: NAVIGATION_PATHS.investRecommendations,
        label: $localize`:Menu invest|:Recommendations`,
        parent: NAVIGATION_PATHS.invest,
      },
      {
        route: NAVIGATION_PATHS.investPremium,
        label: $localize`:Menu invest|:Premium`,
        parent: NAVIGATION_PATHS.invest,
      },
      {
        route: NAVIGATION_PATHS.investAccount,
        label: $localize`:Menu invest|:Account`,
        parent: NAVIGATION_PATHS.invest,
      },
      {
        route: NAVIGATION_PATHS.investPrograms,
        label: $localize`:Menu invest|:Programs`,
        parent: NAVIGATION_PATHS.invest,
      },
      {
        route: NAVIGATION_PATHS.investTariffs,
        label: $localize`:Menu invest|:Tariffs`,
        parent: NAVIGATION_PATHS.invest,
      },
      {
        route: NAVIGATION_PATHS.investAgentInvite,
        label: $localize`:Menu invest|:Become an agent`,
        parent: NAVIGATION_PATHS.invest,
      },
    ],
  },

  {
    route: NAVIGATION_PATHS.insurance,
    label: $localize`:Menu insurance|:Insurance`,
    children: [
      {
        route: NAVIGATION_PATHS.insuranceCar,
        label: $localize`:Menu insurance|:Cars`,
        parent: NAVIGATION_PATHS.insurance,
      },
      {
        route: NAVIGATION_PATHS.insuranceTravel,
        label: $localize`:Menu insurance|:Travel`,
        parent: NAVIGATION_PATHS.insurance,
      },
      {
        route: NAVIGATION_PATHS.insuranceRealEstate,
        label: $localize`:Menu insurance|:Real Estate`,
        parent: NAVIGATION_PATHS.insurance,
      },
      {
        route: NAVIGATION_PATHS.insuranceHealth,
        label: $localize`:Menu insurance|:Health`,
        parent: NAVIGATION_PATHS.insurance,
      },
      {
        route: NAVIGATION_PATHS.insuranceAccount,
        label: $localize`:Menu insurance|:Account`,
        parent: NAVIGATION_PATHS.insurance,
      },
      {
        route: NAVIGATION_PATHS.insuranceAgentInvite,
        label: $localize`:Menu insurance|:Become an agent`,
        parent: NAVIGATION_PATHS.insurance,
      },
    ],
  },

  {
    route: NAVIGATION_PATHS.travel,
    label: $localize`:Menu travel|:Travel`,
    children: [
      {
        route: NAVIGATION_PATHS.travelFlights,
        label: $localize`:Menu travel|:Flights`,
        parent: NAVIGATION_PATHS.travel,
      },
      {
        route: NAVIGATION_PATHS.travelHotels,
        label: $localize`:Menu travel|:Hotels`,
        parent: NAVIGATION_PATHS.travel,
      },
      {
        route: NAVIGATION_PATHS.travelTours,
        label: $localize`:Menu travel|:Tours`,
        parent: NAVIGATION_PATHS.travel,
      },
      {
        route: NAVIGATION_PATHS.travelTrains,
        label: $localize`:Menu travel|:Trains`,
        parent: NAVIGATION_PATHS.travel,
      },
      {
        route: NAVIGATION_PATHS.travelCarRental,
        label: $localize`:Menu travel|:Car rental`,
        parent: NAVIGATION_PATHS.travel,
      },
      {
        route: NAVIGATION_PATHS.travelMap,
        label: $localize`:Menu travel|:Map`,
        parent: NAVIGATION_PATHS.travel,
      },
    ],
  },

  {
    route: NAVIGATION_PATHS.entertainment,
    label: $localize`:Menu entertainment|:Entertainment`,
    children: [
      {
        route: NAVIGATION_PATHS.entertainmentMovies,
        label: $localize`:Menu entertainment|:Movies`,
        parent: NAVIGATION_PATHS.entertainment,
      },
      {
        route: NAVIGATION_PATHS.entertainmentRestaurants,
        label: $localize`:Menu entertainment|:Restaurants`,
        parent: NAVIGATION_PATHS.entertainment,
      },
      {
        route: NAVIGATION_PATHS.entertainmentConcerts,
        label: $localize`:Menu entertainment|:Concerts`,
        parent: NAVIGATION_PATHS.entertainment,
      },
      {
        route: NAVIGATION_PATHS.entertainmentSpectacles,
        label: $localize`:Menu entertainment|:Spectacles`,
        parent: NAVIGATION_PATHS.entertainment,
      },
      {
        route: NAVIGATION_PATHS.entertainmentSports,
        label: $localize`:Menu entertainment|:Sports`,
        parent: NAVIGATION_PATHS.entertainment,
      },
      {
        route: NAVIGATION_PATHS.entertainmentAccount,
        label: $localize`:Menu entertainment|:Account`,
        parent: NAVIGATION_PATHS.entertainment,
      },
    ],
  },
];
