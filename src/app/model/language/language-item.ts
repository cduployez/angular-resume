import {CvDate} from '../shared/cv-date';

/**
 * Elément de la catégorie 'Langages'
 */
export class LanguageItem {

    /**
     * Date de l'élement concerné
     */
    cvDate: CvDate;

    /**
     * Titre
     */
    title: string;

    /**
     * Descriptions
     */
    descriptions: string[];

    constructor(cvDate: CvDate, title: string, description: string) {
        this.cvDate = cvDate;
        this.title = title;
        this.descriptions = description ? [description] : [];
    }
}
