import {SkillItem} from '../model/skill/skill-item/skill-item';
import {SkillEnum} from '../model/skill/skill-enum';
import {FaSkillItem} from '../model/skill/skill-item/fa-skill-item';
import {TextSkillItem} from '../model/skill/skill-item/text-skill-item';
import {IconsService} from '../services/icons.service';
import {JsSkillItem} from '../model/skill/skill-item/js-skill-item';

export class SkillFactory {

    static getAllGroups(iconsService: IconsService): { title: string, skillItemLists: SkillItem[][] }[] {
        return [
            SkillFactory.getLanguageAndFrameworkGroup(iconsService),
            SkillFactory.getWebGroup(iconsService),
            SkillFactory.getOtherGroup(iconsService)
        ];
    }

    static getLanguageAndFrameworkGroup(iconsService: IconsService): { title: string, skillItemLists: SkillItem[][] } {
        return {
            title: 'Langages & Frameworks',
            skillItemLists: [
                [new FaSkillItem(SkillEnum.JAVA, 'Java', iconsService.faJava),
                    new FaSkillItem(SkillEnum.SPRING, 'Spring', iconsService.faLeaf),
                    new TextSkillItem(SkillEnum.C_PLUS_PLUS, 'C++', 'C++')],
                [new TextSkillItem(SkillEnum.C_SHARP, 'C#', 'C#'),
                    new FaSkillItem(SkillEnum.PYTHON, 'Python', iconsService.faPython),
                    new FaSkillItem(SkillEnum.ANDROID, 'Android', iconsService.faAndroid)]
            ]
        };
    }

    static getWebGroup(iconsService: IconsService): { title: string, skillItemLists: SkillItem[][] } {
        return {
            title: 'Web',
            skillItemLists: [
                [new FaSkillItem(SkillEnum.ANGULAR, 'Angular', iconsService.faAngular),
                    new FaSkillItem(SkillEnum.HTML, 'HTML', iconsService.faHtml5),
                    new FaSkillItem(SkillEnum.CSS, 'CSS', iconsService.faCss3)],
                [new JsSkillItem(SkillEnum.JAVASCRIPT, 'Javascript', 'JS'),
                    new JsSkillItem(SkillEnum.TYPESCRIPT, 'Typescript', 'TS')]
            ]
        };
    }

    static getOtherGroup(iconsService: IconsService): { title: string, skillItemLists: SkillItem[][] } {
        return {
            title: 'Divers',
            skillItemLists: [
                [new FaSkillItem(SkillEnum.KEYCLOAK, 'Keycloak', iconsService.faKey),
                    new FaSkillItem(SkillEnum.MYSQL, 'MySQL', iconsService.faDatabase),
                    new FaSkillItem(SkillEnum.MONGODB, 'MongoDB', iconsService.faEnvira)],
                [new FaSkillItem(SkillEnum.MAVEN, 'Maven', iconsService.faFeather),
                    new FaSkillItem(SkillEnum.GIT, 'Git', iconsService.faGit)]
            ]
        };
    }

}
