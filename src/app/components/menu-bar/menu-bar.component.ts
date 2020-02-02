import {Component} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {IconsService} from '../../services/icons.service';
import {LinkService} from '../../services/link.service';

@Component({
    selector: 'cv-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

    constructor(public projectService: ProjectService,
                public linkService: LinkService,
                public iconsService: IconsService) {
    }

}
