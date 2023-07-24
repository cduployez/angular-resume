import {SkillBadgeDtoMapper} from './skill-badge-dto-mapper';
import {ProjectJson} from '../../model/jsons/project-json';
import {ProjectDto} from '../../model/dtos/project-dto';

export class ProjectDtoMapper {
  static fromProjectJson(json: ProjectJson): ProjectDto {
    const dto: ProjectDto = new ProjectDto();
    dto.project = json.project;
    dto.teamSize = json.teamSize;
    dto.descriptions = json.descriptions;
    dto.skills = SkillBadgeDtoMapper.fromSkillBadgeJsons(json.skills);
    return dto;
  }

  static fromProjectJsons(jsons: ProjectJson[]): ProjectDto[] {
    return jsons.map(ProjectDtoMapper.fromProjectJson);
  }
}
