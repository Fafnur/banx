import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthStateModule } from '@banx/auth/state';
import { ApiContentTypeModule } from '@banx/core/api/interceptors/content-type';
import { ApiWithCredentialsModule } from '@banx/core/api/interceptors/with-credentials';
import { ENVIRONMENTS } from '@banx/core/environments/service';
import { MENU, MENU_DEFAULT } from '@banx/core/menu/common';
import { PATHS } from '@banx/core/navigation/common';
import { SOCIAL_GROUPS, SOCIALS, SocialType } from '@banx/core/social/common';
import { RootStoreModule } from '@banx/core/store/root';
import { LocalizationModule } from '@banx/russian/localization';
import { RUSSIAN_NAVIGATION_PATHS } from '@banx/russian/navigation/common';
import { TrackerStateModule } from '@banx/trackers/state';
import { IconsModule } from '@banx/ui/icons';
import { LayoutModule } from '@banx/ui/layout';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    LayoutModule,
    LocalizationModule,
    AuthStateModule,
    ApiContentTypeModule,
    ApiWithCredentialsModule,
    IconsModule,
    RootStoreModule,
    TrackerStateModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
    {
      provide: PATHS,
      useValue: RUSSIAN_NAVIGATION_PATHS,
    },
    {
      provide: MENU,
      useValue: MENU_DEFAULT,
    },
    {
      provide: SOCIALS,
      useValue: [
        SocialType.Vkontakte,
        SocialType.Facebook,
        SocialType.Twitter,
        SocialType.Google,
        SocialType.Gosuslugi,
        SocialType.Tinkoff,
      ],
    },
    {
      provide: SOCIAL_GROUPS,
      useValue: [
        {
          link: 'https://vk.com/fafnur',
          type: SocialType.Vkontakte,
        },
        {
          link: 'https://www.facebook.com/groups/fafnur',
          type: SocialType.Facebook,
        },
        {
          link: 'https://ok.ru/fafnur',
          type: SocialType.Odnoklassniki,
        },
        {
          link: 'https://twitter.com/Fafnur1',
          type: SocialType.Twitter,
        },
        {
          link: 'https://www.youtube.com/channel/UClqRAxHwrkn9xq8Q9mT7Xsg',
          type: SocialType.Youtube,
        },
        {
          link: 'https://www.instagram.com/fafnur',
          type: SocialType.Instagram,
        },
        {
          link: 'https://t.me/f_a_f_n_u_r',
          type: SocialType.Telegram,
        },
      ],
    },
  ],
})
export class AppCoreModule {}
