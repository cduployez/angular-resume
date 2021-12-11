import {ExperienceItem} from '../model/experience/experience-item';
import {CvDate} from '../model/shared/cv-date';
import {DateUtils} from '../utils/date-utils';
import {SkillBadge} from '../model/experience/skill-badge';
import {SkillEnumUtils} from '../utils/skill-enum-utils';
import {SkillBadgeUtils} from '../utils/skill-badge-utils';
import {JobTypeEnum} from '../model/enums/job-type.enum';

export class ExperienceFactory {

    static getAll(): ExperienceItem[] {
        return [
            new ExperienceItem(CvDate.monthRange(DateUtils.fromDate(1, 7, 2021), /* Current */ null),
                'Worldline',
                JobTypeEnum.CDI,
                'Projet Maela',
                ['Lead Developer au sein d\'une équipe internationale en méthode agile, développement d\'une solution de télésuivi médical pour professionnels de santé et patients'],
                [
                    SkillBadgeUtils.java,
                    SkillBadgeUtils.springBoot,
                    new SkillBadge('Angular 11', SkillEnumUtils.angularKeyword, SkillEnumUtils.angularChildrenKeywords),
                    new SkillBadge('MySQL', SkillEnumUtils.mySqlKeyword),
                    SkillBadgeUtils.docker,
                    new SkillBadge('Kubernetes', SkillEnumUtils.kubernetesKeyword, SkillEnumUtils.kubernetesChildrenKeywords),
                    new SkillBadge('Azure', SkillEnumUtils.azureKeyword, SkillEnumUtils.azureChildrenKeywords),
                    new SkillBadge('Etat d\'esprit agile'),
                    new SkillBadge('Anglais')
                ]
            ),
            new ExperienceItem(CvDate.monthRange(DateUtils.fromDate(1, 1, 2021), DateUtils.fromDate(30, 6, 2021)),
                'Worldline',
                JobTypeEnum.CDI,
                'Projet Dossier Médical Partagé',
                ['Interconnexion du Dossier Médical Partagé avec l\'Espace Numérique de Santé'],
                [
                    SkillBadgeUtils.java,
                    SkillBadgeUtils.springBoot,
                    new SkillBadge('Apache Tapestry', SkillEnumUtils.apacheTapestryKeyword, SkillEnumUtils.apacheTapestryChildrenKeywords)
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 1, 2018), DateUtils.fromDate(31, 12, 2020)),
                'Worldline',
                JobTypeEnum.CDI,
                'Projet SI-VIC',
                ['Lead Developer au sein d\'une équipe en méthode agile, développement d\'une solution d\'aide aux victimes en cas d\'événements majeurs sur le territoire Français',
                    'Gestion et amélioration pendant la crise Covid-19 : dénombrement quotidien, suivi et analyse des parcours de soins des patients dans les hôpitaux'],
                [
                    SkillBadgeUtils.java,
                    new SkillBadge('Spring 5', SkillEnumUtils.springKeyword, SkillEnumUtils.springChildrenKeywords),
                    SkillBadgeUtils.keycloak,
                    new SkillBadge('Angular 8', SkillEnumUtils.angularKeyword, SkillEnumUtils.angularChildrenKeywords),
                    new SkillBadge('MySQL', SkillEnumUtils.mySqlKeyword),
                    new SkillBadge('Etat d\'esprit agile')
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 9, 2017), DateUtils.fromDate(31, 12, 2017)),
                'Worldline',
                JobTypeEnum.CDI,
                'Projet Télépaiement',
                ['Mise en place du télépaiement des forfaits de post-stationnement'],
                [
                    SkillBadgeUtils.java,
                    new SkillBadge('Java EE', SkillEnumUtils.javaEeKeyword, SkillEnumUtils.javaEeChildrenKeywords),
                    new SkillBadge('Web', SkillEnumUtils.webKeywords),
                    new SkillBadge('MySQL', SkillEnumUtils.mySqlKeyword)
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 9, 2016), DateUtils.fromDate(31, 8, 2017)),
                'Worldline',
                JobTypeEnum.ALTERNANCE,
                'Projets Datadock, Saveurs & Vie ; Sujets de R&D',
                ['Assistant développeur sur différents projets de dématérialisation'],
                [
                    SkillBadgeUtils.java,
                    SkillBadgeUtils.springBoot,
                    SkillBadgeUtils.keycloak,
                    new SkillBadge('Angular 2', SkillEnumUtils.angularKeyword, SkillEnumUtils.angularChildrenKeywords),
                    new SkillBadge('Ionic 2', SkillEnumUtils.angularKeyword, SkillEnumUtils.angularChildrenKeywords),
                    new SkillBadge('MongoDB', SkillEnumUtils.mongoDbKeyword),
                    SkillBadgeUtils.docker
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 5, 2016), DateUtils.fromDate(31, 7, 2016)),
                'Intelligent Solutions',
                JobTypeEnum.STAGE,
                'Projet IMail',
                ['Développement de modules et optimisation pour la solution d\'emailing professionnel IMAIL'],
                [
                    SkillBadgeUtils.cSharp,
                    new SkillBadge('MVC .Net', SkillEnumUtils.mvcNetKeyword, SkillEnumUtils.mvcNetChildrenKeywords),
                    new SkillBadge('Web', SkillEnumUtils.webKeywords),
                    new SkillBadge('SQL')
                ]
            )
        ];
    }

}
