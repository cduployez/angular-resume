export class ProjectItem {

    /**
     * Titre du projet
     */
    projectTitle: string;

    /**
     * Nombre de personnes ayant travaillé sur ce projet
     */
    teamSize: number;

    /**
     * Descriptions
     */
    descriptions: string[];

    /**
     * Compétences
     */
    skills: string[];


    constructor(projectTitle: string, teamSize: number, descriptions: string[], skills: string[]) {
        this.projectTitle = projectTitle;
        this.teamSize = teamSize;
        this.descriptions = descriptions;
        this.skills = skills;
    }
}
