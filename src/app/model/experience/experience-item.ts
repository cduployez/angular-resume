import {CvDate} from '../shared/cv-date';
import {SkillBadge} from './skill-badge';

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
    skills: SkillBadge[];


    constructor(cvDate: CvDate, enterprise: string, jobType: string, project: string, descriptions: string[], skills: SkillBadge[]) {
        this.cvDate = cvDate;
        this.enterprise = enterprise;
        this.jobType = jobType;
        this.project = project;
        this.descriptions = descriptions;
        this.skills = skills;
    }
}
