import { DateRangeDto } from './date-range-dto';

export class FormationDto {
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
