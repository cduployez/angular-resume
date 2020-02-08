import {Component, OnInit} from '@angular/core';
import {IconsService} from '../../services/icons.service';
import {SkillItem} from '../../model/skill/skill-item';
import {FaSkillItem} from '../../model/skill/fa-skill-item';
import {TextSkillItem} from '../../model/skill/text-skill-item';
import {JsSkillItem} from '../../model/skill/js-skill-item';
import {SkillTypeEnum} from '../../model/skill/skill-type-enum';

@Component({
    selector: 'cv-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    faTypeEnum: SkillTypeEnum = SkillTypeEnum.FA;
    textTypeEnum: SkillTypeEnum = SkillTypeEnum.TEXT;
    jsTypeEnum: SkillTypeEnum = SkillTypeEnum.JS;

    skillItemGroups: { title: string, skillItems: SkillItem[] }[];

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

    private initSkillItemGroups(): { title: string, skillItems: SkillItem[] }[] {
        return [
            {
                title: 'Langages & Frameworks',
                skillItems: [
                    new FaSkillItem('Java', this.iconsService.faJava),
                    new FaSkillItem('Spring', this.iconsService.faLeaf),
                    new TextSkillItem('C++', 'C++'),
                    new TextSkillItem('C#', 'C#'),
                    new FaSkillItem('Python', this.iconsService.faPython),
                    new FaSkillItem('Android', this.iconsService.faAndroid)
                ]
            },
            {
                title: 'Web',
                skillItems: [
                    new FaSkillItem('Angular', this.iconsService.faAngular),
                    new FaSkillItem('HTML', this.iconsService.faHtml5),
                    new FaSkillItem('CSS', this.iconsService.faCss3),
                    new JsSkillItem('Javascript', 'JS'),
                    new JsSkillItem('Typescript', 'TS')
                ]
            },
            {
                title: 'Divers',
                skillItems: [
                    new FaSkillItem('Keycloak', this.iconsService.faKey),
                    new FaSkillItem('MySQL', this.iconsService.faDatabase),
                    new FaSkillItem('MongoDB', this.iconsService.faEnvira),
                    new FaSkillItem('Maven', this.iconsService.faFeather),
                    new FaSkillItem('Git', this.iconsService.faGit)
                ]
            }

        ];
    }


}
