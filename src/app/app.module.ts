import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MatCardModule, MatGridListModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from './components/header/header.component';
import {CategoryTitleComponent} from './components/category/category-title.component';
import {BannerComponent} from './components/banner/banner.component';
import {FormationsComponent} from './components/formations/formations.component';
import {SkillsComponent} from './components/skills/skills.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {ExperiencesComponent} from './components/experiences/experiences.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {LanguagesComponent} from './components/languages/languages.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    // Internal components
    HeaderComponent,
    CategoryTitleComponent,
    BannerComponent,
    FormationsComponent,
    SkillsComponent,
    HobbiesComponent,
    ExperiencesComponent,
    ProjectsComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Angular Material
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
