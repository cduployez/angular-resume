import {Component} from '@angular/core';
import {LanguageItem} from '../../model/language/language-item';
import {LanguageFactory} from '../../server/language.factory';

@Component({
    selector: 'cv-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {

    languageItems: LanguageItem[] = LanguageFactory.getAll();

    constructor() {
    }
}
