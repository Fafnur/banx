import { InjectionToken } from '@angular/core';

export enum SocialType {
  Vkontakte = 'vkontakte',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Odnoklassniki = 'odnoklassniki',
  Youtube = 'youtube',
  Instagram = 'instagram',
  Telegram = 'telegram',
  Whatsapp = 'whatsapp',
  Viber = 'viber',
  WeChat = 'wechat',
  Github = 'github',
  Google = 'google',
  Gosuslugi = 'gosuslugi',
  Tinkoff = 'tinkoff',
  IOMoney = 'iomoney',
  Yandex = 'yandex',
  Habr = 'habr',
  Discord = 'discord',
}

export const SOCIALS = new InjectionToken<SocialType[]>('SocialTypes');

export interface SocialGroup {
  type: SocialType;
  link: string;
}

export const SOCIAL_GROUPS = new InjectionToken<SocialGroup[]>('SocialGroups');
