import {Component, Input} from '@angular/core';
import {IconsService} from '../../../services/icons.service';

@Component({
    selector: 'cv-category-title',
    templateUrl: 'category-title.component.html',
    styleUrls: ['category-title.component.scss']
})
export class CategoryTitleComponent {

    @Input()
    categoryTitle: string;

    @Input()
    categoryDisplayed: boolean = true;

    constructor(public iconsService: IconsService) {
    }

}
