import {Component, OnInit} from '@angular/core';
import {IconsService} from '../../services/icons.service';
import {SkillItem} from '../../model/skill/skill-item/skill-item';
import {FaSkillItem} from '../../model/skill/skill-item/fa-skill-item';
import {TextSkillItem} from '../../model/skill/skill-item/text-skill-item';
import {JsSkillItem} from '../../model/skill/skill-item/js-skill-item';
import {SkillTypeEnum} from '../../model/skill/skill-type-enum';
import {SkillEnum} from '../../model/skill/skill-enum';

@Component({
    selector: 'cv-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss', './skills-icon-colors.component.scss']
})
export class SkillsComponent implements OnInit {

    faTypeEnum: SkillTypeEnum = SkillTypeEnum.FA;
    textTypeEnum: SkillTypeEnum = SkillTypeEnum.TEXT;
    jsTypeEnum: SkillTypeEnum = SkillTypeEnum.JS;

    skillItemGroups: { title: string, skillItemLists: SkillItem[][] }[];

    constructor(public iconsService: IconsService) {
        this.skillItemGroups = this.initSkillItemGroups();
    }

    ngOnInit(): void {
    }

    faSkillItem(item: SkillItem): FaSkillItem {
        return item as FaSkillItem;
    }

    textSkillItem(item: SkillItem): TextSkillItem {
        return item as TextSkillItem;
    }

    jsSkillItem(item: SkillItem): JsSkillItem {
        return item as JsSkillItem;
    }

    private initSkillItemGroups(): { title: string, skillItemLists: SkillItem[][] }[] {
        return [
            {
                title: 'Langages & Frameworks',
                skillItemLists: [
                    [new FaSkillItem(SkillEnum.JAVA, 'Java', this.iconsService.faJava),
                        new FaSkillItem(SkillEnum.SPRING, 'Spring', this.iconsService.faLeaf),
                        new TextSkillItem(SkillEnum.C_PLUS_PLUS, 'C++', 'C++')],
                    [new TextSkillItem(SkillEnum.C_SHARP, 'C#', 'C#'),
                        new FaSkillItem(SkillEnum.PYTHON, 'Python', this.iconsService.faPython),
                        new FaSkillItem(SkillEnum.ANDROID, 'Android', this.iconsService.faAndroid)]
                ]
            },
            {
                title: 'Web',
                skillItemLists: [
                    [new FaSkillItem(SkillEnum.ANGULAR, 'Angular', this.iconsService.faAngular),
                        new FaSkillItem(SkillEnum.HTML, 'HTML', this.iconsService.faHtml5),
                        new FaSkillItem(SkillEnum.CSS, 'CSS', this.iconsService.faCss3)],
                    [new JsSkillItem(SkillEnum.JAVASCRIPT, 'Javascript', 'JS'),
                        new JsSkillItem(SkillEnum.TYPESCRIPT, 'Typescript', 'TS')]
                ]
            },
            {
                title: 'Divers',
                skillItemLists: [
                    [new FaSkillItem(SkillEnum.KEYCLOAK, 'Keycloak', this.iconsService.faKey),
                        new FaSkillItem(SkillEnum.MYSQL, 'MySQL', this.iconsService.faDatabase),
                        new FaSkillItem(SkillEnum.MONGODB, 'MongoDB', this.iconsService.faEnvira)],
                    [new FaSkillItem(SkillEnum.MAVEN, 'Maven', this.iconsService.faFeather),
                        new FaSkillItem(SkillEnum.GIT, 'Git', this.iconsService.faGit)]
                ]
            }

        ];
    }


}
