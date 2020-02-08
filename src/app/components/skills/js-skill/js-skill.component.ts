import {Component, Input, OnInit} from '@angular/core';
import {JsSkillItem} from '../../../model/skill/skill-item/js-skill-item';

@Component({
    selector: 'cv-js-skill',
    templateUrl: './js-skill.component.html',
    styleUrls: ['./js-skill.component.scss']
})
export class JsSkillComponent implements OnInit {

    @Input()
    item: JsSkillItem;

    constructor() {
    }

    ngOnInit(): void {
    }

}
