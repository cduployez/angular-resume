import {HobbyItem} from '../model/hobby/hobby-item';

export class HobbyFactory {

    static getAll(): HobbyItem[] {
        return [
            new HobbyItem('Films et séries', ['Inception', 'Le Roi Lion', 'Kaamelott'], true),
            new HobbyItem('Musique', ['Pratique de la guitare']),
            new HobbyItem('Sport', ['Natation'])
        ];
    }

}
