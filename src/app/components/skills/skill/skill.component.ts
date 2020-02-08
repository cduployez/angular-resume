import {Component, Input, OnInit} from '@angular/core';
import {SkillEnum} from '../../../model/skill/skill-enum';

@Component({
    selector: 'cv-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    iconClass: SkillEnum;

    constructor() {
    }

    ngOnInit(): void {
    }

    optionalClass(iconClass: SkillEnum): string {
        return iconClass ? iconClass.toString() : '';
    }

}
