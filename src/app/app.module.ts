import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationsComponent } from './components/formations/formations.component';
import { HeaderComponent } from './components/header/header.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CategoryTitleComponent } from './components/shared/category-title/category-title.component';
import { DatePrefixComponent } from './components/shared/date-prefix/date-prefix.component';
import { WorkInProgressComponent } from './components/shared/work-in-progress/work-in-progress.component';
import { SkillsComponent } from './components/skills/skills.component';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FooterComponent } from './components/footer/footer.component';
import { BadgeComponent } from './components/shared/badge/badge.component';
import { BadgesComponent } from './components/shared/badges/badges.component';
import { CategoryComponent } from './components/shared/category/category.component';
import { DescriptionComponent } from './components/shared/description/description.component';
import { ItemContainerComponent } from './components/shared/item-container/item-container.component';
import { SubtitleComponent } from './components/shared/subtitle/subtitle.component';
import { TitleComponent } from './components/shared/title/title.component';
import { FaSkillComponent } from './components/skills/fa-skill/fa-skill.component';
import { JsSkillComponent } from './components/skills/js-skill/js-skill.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { TextSkillComponent } from './components/skills/text-skill/text-skill.component';
import { ConfigService } from './services/config/config.service';
import { environment } from '../environments/environment';
import { LoaderComponent } from './components/loader/loader.component';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'fr-FR');

export function loadConfig(configService: ConfigService): () => Promise<void> {
  return () => configService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    // Headers
    HeaderComponent,
    BannerComponent,
    // Categories
    FormationsComponent,
    SkillsComponent,
    HobbiesComponent,
    ExperiencesComponent,
    ProjectsComponent,
    LanguagesComponent,
    // Shared
    CategoryTitleComponent,
    DatePrefixComponent,
    WorkInProgressComponent,
    MenuBarComponent,
    TitleComponent,
    DescriptionComponent,
    SubtitleComponent,
    ItemContainerComponent,
    BadgesComponent,
    BadgeComponent,
    SkillComponent,
    FaSkillComponent,
    TextSkillComponent,
    FooterComponent,
    JsSkillComponent,
    CategoryComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Font Awesome
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
