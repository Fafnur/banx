import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthCardComponent } from './auth-card.component';
import { AuthCardHintComponent } from './components/auth-card-hint/auth-card-hint.component';
import { AuthCardHintModule } from './components/auth-card-hint/auth-card-hint.module';
import { AuthCardLinksComponent } from './components/auth-card-links/auth-card-links.component';
import { AuthCardLinksModule } from './components/auth-card-links/auth-card-links.module';
import { AuthCardSubtitleComponent } from './components/auth-card-subtitle/auth-card-subtitle.component';
import { AuthCardSubtitleModule } from './components/auth-card-subtitle/auth-card-subtitle.module';
import { AuthCardTitleComponent } from './components/auth-card-title/auth-card-title.component';
import { AuthCardTitleModule } from './components/auth-card-title/auth-card-title.module';

@NgModule({
  imports: [CommonModule, RouterModule, AuthCardTitleModule, AuthCardSubtitleModule, AuthCardHintModule, AuthCardLinksModule],
  declarations: [AuthCardComponent],
  exports: [AuthCardComponent, AuthCardTitleComponent, AuthCardSubtitleComponent, AuthCardHintComponent, AuthCardLinksComponent],
})
export class AuthCardModule {}
