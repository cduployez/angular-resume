import {Component, Input} from '@angular/core';
import {CvDate} from '../../../model/shared/cv-date';

@Component({
    selector: 'cv-date-prefix',
    templateUrl: 'date-prefix.component.html',
    styleUrls: ['date-prefix.component.scss']
})
export class DatePrefixComponent {

    @Input()
    cvDate: CvDate;

}
