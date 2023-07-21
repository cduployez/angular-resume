import {DateRangeDto} from '../model/dtos/date-range-dto';
import {DateUtils} from './date-utils';

export class DateRangeUtils {

  static sortByBeginDateDesc<T>(array: T[], dateRangeGetter: (t: T) => DateRangeDto): T[] {
    return DateUtils.sortByDateDesc(array, (t: T) => dateRangeGetter(t).beginDate);
  }

}
