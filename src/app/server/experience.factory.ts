import {ExperienceItem} from '../model/experience/experience-item';
import {CvDate} from '../model/shared/cv-date';
import {DateUtils} from '../utils/date-utils';
import {SkillBadge} from '../model/experience/skill-badge';
import {SkillEnumUtils} from '../utils/skill-enum-utils';

export class ExperienceFactory {

    static getAll(): ExperienceItem[] {
        return [
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 1, 2017), /* Current */null),
                'Worldline',
                null,
                'Projet SI-VIC',
                ['Lead Developer au sein d\'une équipe en méthode agile, développement d\'une solution d\'aide aux victimes en cas d\'événements majeurs sur le territoire Français'],
                [
                    new SkillBadge('Java', SkillEnumUtils.javaKeyword),
                    new SkillBadge('Spring 5', SkillEnumUtils.springKeyword, SkillEnumUtils.springChildrenKeywords),
                    new SkillBadge('Keycloak', SkillEnumUtils.keycloakKeyword),
                    new SkillBadge('Angular 8', SkillEnumUtils.angularKeyword, SkillEnumUtils.angularChildrenKeywords),
                    new SkillBadge('MySQL', SkillEnumUtils.mySqlKeyword),
                    new SkillBadge('Etat d\'esprit agile')
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 9, 2017), DateUtils.fromDate(31, 12, 2017)),
                'Worldline',
                null,
                'Projet Télépaiement',
                ['Mise en place du télépaiement des forfaits de post-stationnement'],
                [
                    new SkillBadge('Java', SkillEnumUtils.javaKeyword),
                    new SkillBadge('Java EE', SkillEnumUtils.javaEeKeyword, SkillEnumUtils.javaEeChildrenKeywords),
                    new SkillBadge('Web', SkillEnumUtils.webKeywords),
                    new SkillBadge('MySQL', SkillEnumUtils.mySqlKeyword)
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 9, 2016), DateUtils.fromDate(31, 8, 2017)),
                'Worldline',
                'Alternance',
                'Projets Datadock, Saveurs & Vie ; Sujets de R&D',
                ['Assistant développeur sur différents projets de dématérialisation'],
                [
                    new SkillBadge('Java', SkillEnumUtils.javaKeyword),
                    new SkillBadge('Spring Boot', SkillEnumUtils.springKeyword, SkillEnumUtils.springChildrenKeywords),
                    new SkillBadge('Keycloak', SkillEnumUtils.keycloakKeyword),
                    new SkillBadge('Angular 2', SkillEnumUtils.angularKeyword, SkillEnumUtils.angularChildrenKeywords),
                    new SkillBadge('Ionic 2', SkillEnumUtils.angularKeyword, SkillEnumUtils.angularChildrenKeywords),
                    new SkillBadge('MongoDB', SkillEnumUtils.mongoDbKeyword),
                    new SkillBadge('Docker', SkillEnumUtils.dockerKeyword)
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 5, 2016), DateUtils.fromDate(31, 7, 2016)),
                'Intelligent Solutions',
                'Stage',
                'Projet IMail',
                ['Développement de modules et optimisation pour la solution d\'emailing professionnel IMAIL'],
                [
                    new SkillBadge('C#', SkillEnumUtils.cSharpKeyword),
                    new SkillBadge('MVC .Net', SkillEnumUtils.mvcNetKeyword, SkillEnumUtils.mvcNetChildrenKeywords),
                    new SkillBadge('Web', SkillEnumUtils.webKeywords),
                    new SkillBadge('SQL')
                ]
            ),
            new ExperienceItem(
                CvDate.yearRange(2014, 2016),
                'ISEN',
                null,
                'Club Informatique',
                ['Responsable Evènementiel', 'Soutien des étudiants : cours, logiciel, matériel'],
                [
                    new SkillBadge('Linux', SkillEnumUtils.linuxKeyword),
                    new SkillBadge('Organisationnel')
                ]
            )
        ];
    }

}
