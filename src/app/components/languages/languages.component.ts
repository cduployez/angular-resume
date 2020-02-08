import {Component, OnInit} from '@angular/core';
import {LanguageItem} from '../../model/language/language-item';
import {DateUtils} from '../../utils/date-utils';
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
                new CvDate(DateUtils.fromYear(2017), DateUtils.fromYear(2017), 'year'),
                'TOEIC',
                'Score : 975'
            ),
            new LanguageItem(
                new CvDate(DateUtils.fromYear(2011), DateUtils.fromYear(2011), 'year'),
                'First Certificate in English',
                'Grade A, Niveau Européen C1'
            )
        ];
    }

    ngOnInit(): void {
    }
}
