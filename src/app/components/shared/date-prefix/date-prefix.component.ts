import {Component, Input} from '@angular/core';
import {CvDate} from '../../../model/shared/cv-date';

@Component({
    selector: 'cv-date-prefix',
    templateUrl: 'date-prefix.component.html',
    styleUrls: ['date-prefix.component.scss']
})
export class DatePrefixComponent {

    private _cvDate: CvDate;

    @Input()
    get cvDate(): CvDate {
        return this._cvDate;
    }

    set cvDate(value: CvDate) {
        this._cvDate = value;
    }
}
