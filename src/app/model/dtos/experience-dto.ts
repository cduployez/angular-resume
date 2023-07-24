import { JobTypeEnum } from '../enums/job-type.enum';
import { DateRangeDto } from './date-range-dto';
import { SkillBadgeDto } from './skill-badge-dto';

export class ExperienceDto {
  /**
   * Date range of the experience
   */
  dateRange: DateRangeDto;

  /**
   * Company name
   */
  company: string;

  /**
   * Job type
   */
  jobType: JobTypeEnum;

  /**
   * Project name
   */
  project: string;

  /**
   * Descriptions of the experience
   */
  descriptions: string[];

  /**
   * Skills
   */
  skills: SkillBadgeDto[];
}
