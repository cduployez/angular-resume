import { Component, Input } from '@angular/core';
import { DateRangeDto } from '../../../model/dtos/date-range-dto';
import { DatePrefixMessages } from './date-prefix-messages';

@Component({
  selector: 'cv-date-prefix',
  templateUrl: 'date-prefix.component.html',
  styleUrls: ['date-prefix.component.scss']
})
export class DatePrefixComponent {
  readonly messages: DatePrefixMessages = new DatePrefixMessages();

  @Input()
  dateRange: DateRangeDto | null = null;
}
