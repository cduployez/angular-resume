import { SkillBadgeDto } from './skill-badge-dto';

export class ProjectDto {
  /**
   * Project name
   */
  project: string;

  /**
   * Job type
   */
  teamSize: number;

  /**
   * Descriptions of the experience
   */
  descriptions: string[];

  /**
   * Skills
   */
  skills: SkillBadgeDto[];
}
