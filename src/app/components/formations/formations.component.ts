import {Component} from '@angular/core';
import {FormationItem} from '../../model/formation/formation-item';
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
                CvDate.yearRange(2015, 2017),
                'ISEN Lille – Ecole d\'ingénieur',
                ['Spécialisé en Développement Logiciel et Big Data', 'Contrat de professionnalisation']
            ),
            new FormationItem(
                CvDate.yearRange(2012, 2015),
                'ISEN Lille – Ecole d\'ingénieur',
                ['Cycle Informatique et Réseaux, Diplômé Bachelor ISEN']
            ),
            new FormationItem(
                CvDate.yearRange(2009, 2012),
                'Institut de Genech',
                ['Baccalauréat Série Scientifique, Mention Très Bien',
                    'Section Européenne'])
        ];
    }

}
