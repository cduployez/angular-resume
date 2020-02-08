import {Component, OnInit} from '@angular/core';
import {ExperienceItem} from '../../model/experience/experience-item';
import {DateUtils} from '../../utils/date-utils';
import {CvDate} from '../../model/shared/cv-date';

@Component({
    selector: 'cv-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

    experienceItems: ExperienceItem[] = ExperiencesComponent.initExperienceItems();

    constructor() {
    }

    private static initExperienceItems(): ExperienceItem[] {
        return [
            new ExperienceItem(
                new CvDate(DateUtils.fromDate(1, 1, 2017), /* Actuel */null, 'month'),
                'Worldline',
                null,
                'Projet SI-VIC',
                ['Lead Developer au sein d\'une équipe en méthode agile, développement d\'une solution d\'aide aux victimes en cas d\'événements majeurs sur le territoire Français'],
                ['Java', 'Spring 5', 'Keycloak', 'MySQL', 'Angular 8', 'Etat d\'esprit agile']
            ),
            new ExperienceItem(
                new CvDate(DateUtils.fromDate(1, 9, 2017), DateUtils.fromDate(31, 12, 2017), 'month'),
                'Worldline',
                null,
                'Projet Télépaiement',
                ['Mise en place du télépaiement des forfaits de post-stationnement'],
                ['Java', 'Java EE', 'MySQL', 'Web']
            ),
            new ExperienceItem(
                new CvDate(DateUtils.fromDate(1, 9, 2016), DateUtils.fromDate(31, 8, 2017), 'month'),
                'Worldline',
                'Alternance',
                'Projets Datadock, Saveurs & Vie ; Sujets de R&D',
                ['Assistant développeur sur différents projets de dématérialisation'],
                ['Java', 'Spring Boot', 'Angular 2', 'Ionic 2', 'MongoDB', 'Docker']
            ),
            new ExperienceItem(
                new CvDate(DateUtils.fromDate(1, 5, 2016), DateUtils.fromDate(31, 7, 2016), 'month'),
                'Intelligent Solutions',
                'Stage',
                'Projet IMail',
                ['Développement de modules et optimisation pour la solution d\'emailing professionnel IMAIL'],
                ['C#', 'MVC .Net', 'SQL', 'Web']
            ),
            new ExperienceItem(
                new CvDate(DateUtils.fromYear(2014), DateUtils.fromYear(2016), 'year'),
                'ISEN',
                null,
                'Club Informatique ISEN',
                ['Responsable Evènementiel', 'Soutien des étudiants : cours, logiciel, matériel'],
                ['Linux', 'Organisationnel']
            )
        ];
    }

    ngOnInit(): void {
    }
}
