import { IconsService } from '../../services/ui/icons.service';
import { SkillGroupDto } from '../../model/dtos/skill-group-dto';
import { SkillGroup } from '../../model/skill/skill-group';
import { SkillItemMapper } from './skill-item-mapper';

export class SkillGroupMapper {
  static fromSkillGroupDto(
    dto: SkillGroupDto,
    iconsService: IconsService
  ): SkillGroup {
    const group: SkillGroup = new SkillGroup();
    group.title = dto.title;
    group.skills = SkillItemMapper.fromSkillDtos(dto.skills, iconsService);
    return group;
  }

  static fromSkillGroupDtos(
    dtos: SkillGroupDto[],
    iconsService: IconsService
  ): SkillGroup[] {
    return dtos.map(dto =>
      SkillGroupMapper.fromSkillGroupDto(dto, iconsService)
    );
  }
}
