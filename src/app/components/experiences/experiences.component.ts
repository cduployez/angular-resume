import {Component} from '@angular/core';
import {ExperienceItem} from '../../model/experience/experience-item';
import {ExperienceFactory} from '../../server/experience.factory';

@Component({
    selector: 'cv-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

    experienceItems: ExperienceItem[] = ExperienceFactory.getAll();

    constructor() {
    }

}
