import {Component, Input, OnInit} from '@angular/core';
import {FaSkillItem} from '../../../model/skill/skill-item/fa-skill-item';

@Component({
    selector: 'cv-fa-skill',
    templateUrl: './fa-skill.component.html',
    styleUrls: ['./fa-skill.component.scss']
})
export class FaSkillComponent implements OnInit {

    @Input()
    item: FaSkillItem;

    constructor() {
    }

    ngOnInit(): void {
    }

}
