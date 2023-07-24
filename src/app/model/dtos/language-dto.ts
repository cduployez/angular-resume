import { DateRangeDto } from './date-range-dto';

export class LanguageDto {
  /**
   * Date range
   */
  dateRange: DateRangeDto;

  /**
   * Title
   */
  title: string;

  /**
   * Descriptions
   */
  descriptions: string[];
}
