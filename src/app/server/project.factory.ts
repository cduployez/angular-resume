import {ProjectItem} from '../model/project/project-item';

export class ProjectFactory {

    static getAll(): ProjectItem[] {
        return [
            new ProjectItem('TwinMax', 5,
                ['Application Android de calcul et affichage de courbes en temps réel afin de calibrer les carburateurs d’une moto pour l’entreprise Selectronic'],
                ['Java', 'Android']
            ),
            new ProjectItem('MatchFM', 4,
                ['Application Android de rencontre de personnes autour des recommandations musicales'],
                ['C#', 'Xamarin', '.NET']
            ),
            new ProjectItem('Rubik Pixel Art Solver', 5,
                ['Robot permettant de scanner et manipuler des Rubik’s Cubes non résolus et former des images'],
                ['C++', 'OpenCV']
            ),
            new ProjectItem('Traveling Bradeux Problem Solver', 3,
                ['Planification de tournées sur Google Maps'],
                ['HTML', 'CSS', 'JavaScript', 'Google Maps', 'C++']
            )
        ];
    }

}
