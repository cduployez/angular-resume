import { JobTypeEnum } from '../../model/enums/job-type.enum';

export class ExperiencesMessages {
  /**
   * Category title
   */
  readonly categoryTitle: string = 'Expériences';
  private readonly jobTypeRecord: Record<JobTypeEnum, string> = {
    STAGE: 'Stage',
    ALTERNANCE: 'Alternance',
    CDD: 'CDD',
    CDI: 'CDI'
  };

  jobTypeText(jobType: JobTypeEnum): string | null {
    return jobType !== JobTypeEnum.CDI ? this.jobTypeRecord[jobType] : null;
  }
}
