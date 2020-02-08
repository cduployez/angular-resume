import {Component, OnInit} from '@angular/core';
import {HobbyItem} from '../../model/hobby/hobby-item';

@Component({
    selector: 'cv-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

    hobbyItems: HobbyItem[] = HobbiesComponent.initHobbyItems();

    constructor() {
    }

    private static initHobbyItems(): HobbyItem[] {
        return [
            new HobbyItem('Films et séries', ['Inception', 'Le Roi Lion', 'Kaamelott'], true),
            new HobbyItem('Musique', ['Pratique de la guitare', 'chansons françaises à texte']),
            new HobbyItem('Sport', ['Natation'])
        ];
    }

    ngOnInit(): void {
    }
}
