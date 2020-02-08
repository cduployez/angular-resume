import {CvDate} from '../shared/cv-date';

/**
 * ELément de la catégorie 'Expérience'
 */
export class ExperienceItem {

    /**
     * Date de l'élement concerné
     */
    cvDate: CvDate;

    /**
     * Entreprise
     */
    enterprise: string;

    /**
     * Type d'emploi (Alternance, CDD, CDI...)
     */
    jobType: string;

    /**
     * Projet
     */
    project: string;

    /**
     * Description
     */
    descriptions: string[];

    /**
     * Compétences
     */
    skills: string[];


    constructor(cvDate: CvDate, enterprise: string, jobType: string, project: string, descriptions: string[], skills: string[]) {
        this.cvDate = cvDate;
        this.enterprise = enterprise;
        this.jobType = jobType;
        this.project = project;
        this.descriptions = descriptions;
        this.skills = skills;
    }
}
