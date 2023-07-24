import { JobTypeEnum } from '../../model/enums/job-type.enum';

export class ExperiencesMessages {
  private readonly jobTypeRecord: Record<JobTypeEnum, string> = {
    STAGE: 'Stage',
    ALTERNANCE: 'Alternance',
    CDD: 'CDD',
    CDI: 'CDI',
  };

  jobTypeText(jobType: JobTypeEnum): string {
    return this.jobTypeRecord[jobType];
  }
}
