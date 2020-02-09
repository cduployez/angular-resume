import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'cv-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    animations: [
        trigger('openClose', [
            // States
            state('open', style({
                opacity: 1
            })),
            state('closed', style({
                overflow: 'hidden',
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                height: 0,
                opacity: 0
            })),
            // Transitions
            transition('open => closed, closed => open', [animate('0.2s')])
        ])
    ]
})
export class CategoryComponent implements OnInit {

    @Input()
    title: string;

    /**
     * openClose animation state
     */
    openCloseState: 'open' | 'closed' = 'open';

    constructor() {
    }

    ngOnInit(): void {
    }

    /**
     * Open/Close category
     */
    toggle(): void {
        this.openCloseState = this.openCloseState === 'closed' ? 'open' : 'closed';
    }

}
