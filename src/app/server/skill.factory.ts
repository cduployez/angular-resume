import {SkillItem} from '../model/skill/skill-item/skill-item';
import {SkillEnum} from '../model/skill/skill-enum';
import {FaSkillItem} from '../model/skill/skill-item/fa-skill-item';
import {TextSkillItem} from '../model/skill/skill-item/text-skill-item';
import {IconsService} from '../services/ui/icons.service';
import {JsSkillItem} from '../model/skill/skill-item/js-skill-item';
import {SkillEnumUtils} from '../utils/skill-enum-utils';

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
                [new FaSkillItem('Java', SkillEnum.JAVA, null, iconsService.faJava),
                    new FaSkillItem('Spring', SkillEnum.SPRING, SkillEnumUtils.springChildrenKeywords, iconsService.faLeaf),
                    new TextSkillItem('C++', SkillEnum.C_PLUS_PLUS, null, 'C++')],
                [new TextSkillItem('C#', SkillEnum.C_SHARP, null, 'C#'),
                    new FaSkillItem('Python', SkillEnum.PYTHON, null, iconsService.faPython),
                    new FaSkillItem('Android', SkillEnum.ANDROID, SkillEnumUtils.androidChildrenKeywords, iconsService.faAndroid)]
            ]
        };
    }

    static getWebGroup(iconsService: IconsService): { title: string, skillItemLists: SkillItem[][] } {
        return {
            title: 'Web',
            skillItemLists: [
                [new FaSkillItem('Angular', SkillEnum.ANGULAR, SkillEnumUtils.angularChildrenKeywords, iconsService.faAngular),
                    new FaSkillItem('HTML', SkillEnum.HTML, null, iconsService.faHtml5),
                    new FaSkillItem('CSS', SkillEnum.CSS, null, iconsService.faCss3)],
                [new JsSkillItem('Javascript', SkillEnum.JAVASCRIPT, null, 'JS'),
                    new JsSkillItem('Typescript', SkillEnum.TYPESCRIPT, null, 'TS')]
            ]
        };
    }

    static getOtherGroup(iconsService: IconsService): { title: string, skillItemLists: SkillItem[][] } {
        return {
            title: 'Divers',
            skillItemLists: [
                [new FaSkillItem('Keycloak', SkillEnum.KEYCLOAK, null, iconsService.faKey),
                    new FaSkillItem('MySQL', SkillEnum.MYSQL, null, iconsService.faDatabase),
                    new FaSkillItem('MongoDB', SkillEnum.MONGODB, null, iconsService.faEnvira)],
                [new FaSkillItem('Maven', SkillEnum.MAVEN, null, iconsService.faFeather),
                    new FaSkillItem('Git', SkillEnum.GIT, null, iconsService.faGit)]
            ]
        };
    }

}
