import {ProjectItem} from '../model/project/project-item';
import {SkillBadgeUtils} from '../utils/skill-badge-utils';
import {SkillBadge} from '../model/experience/skill-badge';
import {SkillEnumUtils} from '../utils/skill-enum-utils';
import {SkillEnum} from '../model/skill/skill-enum';

export class ProjectFactory {

    static getAll(): ProjectItem[] {
        return [
            new ProjectItem('TwinMax', 5,
                ['Application Android de calcul et affichage de courbes en temps réel afin de calibrer les carburateurs d’une moto pour l’entreprise Selectronic'],
                [
                    SkillBadgeUtils.java,
                    new SkillBadge('Android', [SkillEnum.ANDROID], SkillEnumUtils.androidChildrenKeywords)
                ]
            ),
            new ProjectItem('MatchFM', 4,
                ['Application Android de rencontre de personnes autour des recommandations musicales'],
                [
                    SkillBadgeUtils.cSharp,
                    new SkillBadge('Xamarin', [SkillEnum.XAMARIN], SkillEnumUtils.xamarinChildrenKeywords),
                    new SkillBadge('.NET', [SkillEnum.NET], SkillEnumUtils.netChildrenKeywords)
                ]
            ),
            new ProjectItem('Rubik Pixel Art Solver', 5,
                ['Robot de scan et reproduction d\'images avec des Rubi\'s Cubes'],
                [
                    SkillBadgeUtils.cPlusPlus,
                    new SkillBadge('Python', SkillEnumUtils.pythonKeyword),
                    new SkillBadge('OpenCV', null, SkillEnumUtils.openCvChildrenKeywords)
                ]
            ),
            new ProjectItem('Traveling Bradeux Problem Solver', 3,
                ['Planification de tournées sur Google Maps'],
                [
                    new SkillBadge('HTML', [SkillEnum.HTML]),
                    new SkillBadge('CSS', [SkillEnum.CSS]),
                    new SkillBadge('JavaScript', [SkillEnum.JAVASCRIPT]),
                    new SkillBadge('Google Maps'),
                    SkillBadgeUtils.cPlusPlus
                ])
        ];
    }

}
