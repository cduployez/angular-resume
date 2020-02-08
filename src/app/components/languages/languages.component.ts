import {Component, OnInit} from '@angular/core';
import {LanguageItem} from '../../model/language/language-item';
import {CvDate} from '../../model/shared/cv-date';

@Component({
    selector: 'cv-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

    languageItems: LanguageItem[] = LanguagesComponent.initLanguageItems();

    constructor() {
    }

    private static initLanguageItems(): LanguageItem[] {
        return [
            new LanguageItem(
                CvDate.year(2017),
                'TOEIC',
                'Score : 975'
            ),
            new LanguageItem(
                CvDate.year(2011),
                'First Certificate in English',
                'Grade A, Niveau Européen C1'
            )
        ];
    }

    ngOnInit(): void {
    }
}
