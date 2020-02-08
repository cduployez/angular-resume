import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'cv-badges',
    templateUrl: './badges.component.html',
    styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

    @Input()
    badges: string[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
