import {Component} from '@angular/core';
import {HobbyItem} from '../../model/hobby/hobby-item';
import {HobbyFactory} from '../../server/hobby.factory';

@Component({
    selector: 'cv-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {

    hobbyItems: HobbyItem[] = HobbyFactory.getAll();

    constructor() {
    }
}
