import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'cv-js-skill',
    templateUrl: './js-skill.component.html',
    styleUrls: ['./js-skill.component.scss']
})
export class JsSkillComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    iconText: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
