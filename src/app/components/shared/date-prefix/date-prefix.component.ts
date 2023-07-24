import { Component, Input } from '@angular/core';
import { DateRangeDto } from '../../../model/dtos/date-range-dto';

@Component({
  selector: 'cv-date-prefix',
  templateUrl: 'date-prefix.component.html',
  styleUrls: ['date-prefix.component.scss'],
})
export class DatePrefixComponent {
  @Input()
  dateRange: DateRangeDto;
}
