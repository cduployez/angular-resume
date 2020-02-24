import {Component} from '@angular/core';
import {ProjectItem} from '../../model/project/project-item';
import {ProjectFactory} from '../../server/project.factory';

@Component({
    selector: 'cv-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    projectItems: ProjectItem[] = ProjectFactory.getAll();

    constructor() {
    }
}
