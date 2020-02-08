import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'cv-text-skill',
    templateUrl: './text-skill.component.html',
    styleUrls: ['./text-skill.component.scss']
})
export class TextSkillComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    iconText: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
