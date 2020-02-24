import {ExperienceItem} from '../model/experience/experience-item';
import {CvDate} from '../model/shared/cv-date';
import {DateUtils} from '../utils/date-utils';
import {SkillBadge} from '../model/experience/skill-badge';
import {SkillEnum} from '../model/skill/skill-enum';

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
                    new SkillBadge('Java', SkillEnum.JAVA),
                    new SkillBadge('Spring 5', SkillEnum.SPRING, SkillEnum.JAVA),
                    new SkillBadge('Keycloak', SkillEnum.KEYCLOAK),
                    new SkillBadge('MySQL', SkillEnum.MYSQL),
                    new SkillBadge('Angular 8', SkillEnum.ANGULAR, SkillEnum.TYPESCRIPT, SkillEnum.CSS, SkillEnum.HTML),
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
                    new SkillBadge('Java', SkillEnum.JAVA),
                    new SkillBadge('Java EE', SkillEnum.JAVA),
                    new SkillBadge('MySQL', SkillEnum.MYSQL),
                    new SkillBadge('Web', SkillEnum.HTML, SkillEnum.CSS, SkillEnum.JAVASCRIPT)
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 9, 2016), DateUtils.fromDate(31, 8, 2017)),
                'Worldline',
                'Alternance',
                'Projets Datadock, Saveurs & Vie ; Sujets de R&D',
                ['Assistant développeur sur différents projets de dématérialisation'],
                [
                    new SkillBadge('Java', SkillEnum.JAVA),
                    new SkillBadge('Spring Boot', SkillEnum.SPRING, SkillEnum.JAVA),
                    new SkillBadge('Angular 2', SkillEnum.ANGULAR),
                    new SkillBadge('Ionic 2', SkillEnum.HTML, SkillEnum.CSS, SkillEnum.TYPESCRIPT, SkillEnum.ANGULAR),
                    new SkillBadge('MongoDB', SkillEnum.MONGODB),
                    new SkillBadge('Docker', SkillEnum.DOCKER)
                ]
            ),
            new ExperienceItem(
                CvDate.monthRange(DateUtils.fromDate(1, 5, 2016), DateUtils.fromDate(31, 7, 2016)),
                'Intelligent Solutions',
                'Stage',
                'Projet IMail',
                ['Développement de modules et optimisation pour la solution d\'emailing professionnel IMAIL'],
                [
                    new SkillBadge('C#', SkillEnum.C_SHARP),
                    new SkillBadge('MVC .Net', SkillEnum.C_SHARP, SkillEnum.HTML),
                    new SkillBadge('SQL'),
                    new SkillBadge('Web', SkillEnum.HTML, SkillEnum.CSS, SkillEnum.JAVASCRIPT)
                ]
            ),
            new ExperienceItem(
                CvDate.yearRange(2014, 2016),
                'ISEN',
                null,
                'Club Informatique',
                ['Responsable Evènementiel', 'Soutien des étudiants : cours, logiciel, matériel'],
                [
                    new SkillBadge('Linux', SkillEnum.LINUX),
                    new SkillBadge('Organisationnel')
                ]
            )
        ];
    }

}
