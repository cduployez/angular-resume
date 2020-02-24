import {Component} from '@angular/core';
import {FormationItem} from '../../model/formation/formation-item';
import {CvDate} from '../../model/shared/cv-date';
import {FormationFactory} from '../../server/formation.factory';


@Component({
    selector: 'cv-formations',
    templateUrl: './formations.component.html',
    styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {

    formationItems: FormationItem[] = FormationFactory.getAll();

    constructor() {
    }

}
