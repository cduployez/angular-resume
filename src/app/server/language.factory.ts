import {LanguageItem} from '../model/language/language-item';
import {CvDate} from '../model/shared/cv-date';

export class LanguageFactory {

    static getAll(): LanguageItem[] {
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

}
