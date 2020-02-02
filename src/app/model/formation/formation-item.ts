import {CvDate} from '../shared/cv-date';

/**
 * Elément de la catégorie 'Formation'
 */
export class FormationItem {

    /**
     * Date de l'élement concerné
     */
    cvDate: CvDate;

    /**
     * Titre
     */
    title: string;

    /**
     * Description
     */
    descriptions: string[];

    constructor(cvDate: CvDate, title: string, descriptions: string[]) {
        this.cvDate = cvDate;
        this.title = title;
        this.descriptions = descriptions ? descriptions : [];
    }

}
