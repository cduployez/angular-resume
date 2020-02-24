import {Component, OnInit} from '@angular/core';
import {IconsService} from '../../services/ui/icons.service';
import {SkillItem} from '../../model/skill/skill-item/skill-item';
import {FaSkillItem} from '../../model/skill/skill-item/fa-skill-item';
import {TextSkillItem} from '../../model/skill/skill-item/text-skill-item';
import {JsSkillItem} from '../../model/skill/skill-item/js-skill-item';
import {SkillTypeEnum} from '../../model/skill/skill-type-enum';
import {SkillFactory} from '../../server/skill.factory';

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
        this.skillItemGroups = SkillFactory.getAllGroups(this.iconsService);
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


}
