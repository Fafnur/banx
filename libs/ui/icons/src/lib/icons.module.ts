import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface IconConfig {
  name: string;
  path: string;
}

const icons: IconConfig[] = [
  {
    name: 'banxLogo',
    path: 'assets/images/logo.svg',
  },
  {
    name: 'banxVkontakte',
    path: 'assets/images/socials/vkontakte.svg',
  },
  {
    name: 'banxFacebook',
    path: 'assets/images/socials/facebook.svg',
  },
  {
    name: 'banxTwitter',
    path: 'assets/images/socials/twitter.svg',
  },
  {
    name: 'banxOdnoklassniki',
    path: 'assets/images/socials/odnoklassniki.svg',
  },
  {
    name: 'banxYoutube',
    path: 'assets/images/socials/youtube.svg',
  },
  {
    name: 'banxInstagram',
    path: 'assets/images/socials/instagram.svg',
  },
  {
    name: 'banxTelegram',
    path: 'assets/images/socials/telegram.svg',
  },
  {
    name: 'banxWhatsapp',
    path: 'assets/images/socials/whatsapp.svg',
  },
  {
    name: 'banxViber',
    path: 'assets/images/socials/viber.svg',
  },
  {
    name: 'banxWechat',
    path: 'assets/images/socials/wechat.svg',
  },
  {
    name: 'banxGithub',
    path: 'assets/images/socials/github.svg',
  },
  {
    name: 'banxGoogle',
    path: 'assets/images/socials/google.svg',
  },
  {
    name: 'banxGosuslugi',
    path: 'assets/images/socials/gosuslugi.svg',
  },
  {
    name: 'banxGosuslugi',
    path: 'assets/images/socials/gosuslugi.svg',
  },
  {
    name: 'banxTinkoff',
    path: 'assets/images/socials/tinkoff.svg',
  },
  {
    name: 'banxIomoney',
    path: 'assets/images/socials/iomoney.svg',
  },
  {
    name: 'banxYandex',
    path: 'assets/images/socials/yandex.svg',
  },
  {
    name: 'banxHabr',
    path: 'assets/images/socials/habr.svg',
  },
  {
    name: 'banxDiscord',
    path: 'assets/images/socials/discord.svg',
  },
  {
    name: 'banxLocaleRU',
    path: 'assets/images/locales/ru.svg',
  },
  {
    name: 'banxLocaleEN',
    path: 'assets/images/locales/en.svg',
  },
  {
    name: 'banxLocaleFR',
    path: 'assets/images/locales/fr.svg',
  },
];

@NgModule({
  imports: [MatIconModule],
  exports: [MatIconModule],
})
export class IconsModule {
  constructor(private readonly matIconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {
    icons.forEach((icon) => this.add(icon));
  }

  private add(config: IconConfig): void {
    this.matIconRegistry.addSvgIcon(config.name, this.domSanitizer.bypassSecurityTrustResourceUrl(config.path));
  }
}
