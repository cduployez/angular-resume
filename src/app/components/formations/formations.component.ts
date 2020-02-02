import {Component} from '@angular/core';
import {FormationItem} from '../../model/formation/formation-item';
import {DateUtils} from '../../utils/date-utils';
import {CvDate} from '../../model/shared/cv-date';


@Component({
    selector: 'cv-formations',
    templateUrl: './formations.component.html',
    styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {

    formationItems: FormationItem[] = FormationsComponent.initFormationItems();

    constructor() {
    }

    private static initFormationItems(): FormationItem[] {

        return [
            new FormationItem(
                new CvDate(DateUtils.fromYear(2015), DateUtils.fromYear(2017), 'year'),
                'ISEN Lille – Ecole d’ingénieur',
                ['Spécialisé en Développement Logiciel et Big Data', 'Contrat de professionnalisation']
            ),
            new FormationItem(
                new CvDate(DateUtils.fromYear(2012), DateUtils.fromYear(2015), 'year'),
                'ISEN Lille – Ecole d’ingénieur',
                ['Cycle Informatique et Réseaux, Diplômé Bachelor ISEN']
            ),
            new FormationItem(new CvDate(DateUtils.fromYear(2009), DateUtils.fromYear(2012), 'year'),
                'Institut de Genech',
                ['Baccalauréat Série Scientifique, Mention Très Bien',
                    'Section Européenne'])
        ];
    }

}
