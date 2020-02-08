import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'cv-subtitle',
    templateUrl: './subtitle.component.html',
    styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

    @Input()
    subtitle: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
