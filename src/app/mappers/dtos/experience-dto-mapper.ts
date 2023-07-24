import { ExperienceDto } from '../../model/dtos/experience-dto';
import { ExperienceJson } from '../../model/jsons/experience-json';
import { DateRangeDtoMapper } from './date-range-dto-mapper';
import { SkillBadgeDtoMapper } from './skill-badge-dto-mapper';

export class ExperienceDtoMapper {
  static fromExperienceJson(json: ExperienceJson): ExperienceDto {
    const dto: ExperienceDto = new ExperienceDto();
    dto.dateRange = DateRangeDtoMapper.fromDateRangeJson(json.dateRange);
    dto.company = json.company;
    dto.jobType = json.jobType;
    dto.project = json.project;
    dto.descriptions = json.descriptions;
    dto.skills = SkillBadgeDtoMapper.fromSkillBadgeJsons(json.skills);
    return dto;
  }

  static fromExperienceJsons(jsons: ExperienceJson[]): ExperienceDto[] {
    return jsons.map(ExperienceDtoMapper.fromExperienceJson);
  }
}
