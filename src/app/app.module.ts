import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {CategoryTitleComponent} from './components/shared/category-title/category-title.component';
import {BannerComponent} from './components/banner/banner.component';
import {FormationsComponent} from './components/formations/formations.component';
import {SkillsComponent} from './components/skills/skills.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {ExperiencesComponent} from './components/experiences/experiences.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {LanguagesComponent} from './components/languages/languages.component';
import {BrowserModule} from '@angular/platform-browser';
import {DatePrefixComponent} from './components/shared/date-prefix/date-prefix.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {WorkInProgressComponent} from './components/shared/work-in-progress/work-in-progress.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TitleComponent } from './components/shared/title/title.component';
import { DescriptionComponent } from './components/shared/description/description.component';
import { SubtitleComponent } from './components/shared/subtitle/subtitle.component';
import { ItemContainerComponent } from './components/shared/item-container/item-container.component';
import { BadgesComponent } from './components/shared/badges/badges.component';
import { BadgeComponent } from './components/shared/badge/badge.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaSkillComponent } from './components/skills/fa-skill/fa-skill.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { TextSkillComponent } from './components/skills/text-skill/text-skill.component';
import { JsSkillComponent } from './components/skills/js-skill/js-skill.component';
import { CategoryComponent } from './components/shared/category/category.component';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'fr-FR');

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
        CategoryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // Font Awesome
        FontAwesomeModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'fr-FR'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
