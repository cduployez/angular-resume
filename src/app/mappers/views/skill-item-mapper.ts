import { SkillItem } from '../../model/skill/skill-item/skill-item';
import { SkillEnum } from '../../model/enums/skill.enum';
import { IconsService } from '../../services/ui/icons.service';
import { FaSkillItemMapper } from './fa-skill-item-mapper';
import { SkillDto } from '../../model/dtos/skill-dto';
import { TextSkillItemMapper } from './text-skill-item-mapper';
import { JsSkillItemMapper } from './js-skill-item-mapper';

export class SkillItemMapper {
  static readonly fromSkillBadgeDtoMapperRecord: Partial<
    Record<SkillEnum, (dto: SkillDto, iconsService: IconsService) => SkillItem>
  > = {
    JAVA: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faJava),
    SPRING: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faLeaf),
    C_PLUS_PLUS: (dto: SkillDto, iconsService: IconsService) =>
      TextSkillItemMapper.fromSkillDto(dto, 'C++'),
    C_SHARP: (dto: SkillDto, iconsService: IconsService) =>
      TextSkillItemMapper.fromSkillDto(dto, 'C#'),
    PYTHON: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faPython),
    ANDROID: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faAndroid),
    ANGULAR: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faAngular),
    HTML: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faHtml5),
    CSS: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faCss3),
    JAVASCRIPT: (dto: SkillDto, iconsService: IconsService) =>
      JsSkillItemMapper.fromSkillDto(dto, 'JS'),
    TYPESCRIPT: (dto: SkillDto, iconsService: IconsService) =>
      JsSkillItemMapper.fromSkillDto(dto, 'TS'),
    GITLAB_CI: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faGitlab),
    DOCKER: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faDocker),
    KUBERNETES: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faDharmachakra),
    KEYCLOAK: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faKey),
    MYSQL: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faDatabase),
    MONGODB: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faEnvira),
  };

  static fromSkillDto(
    dto: SkillDto,
    iconsService: IconsService
  ): SkillItem | null {
    const item: SkillItem | null =
      SkillItemMapper.fromSkillBadgeDtoMapperRecord?.[dto.keyword](
        dto,
        iconsService
      ) || null;
    if (!item) {
      console.error(`The skill '${dto.keyword}' could not be mapped`);
    }
    return item;
  }

  static fromSkillDtos(
    dtos: SkillDto[],
    iconsService: IconsService
  ): SkillItem[] {
    return (dtos || [])
      .map((dto: SkillDto) => SkillItemMapper.fromSkillDto(dto, iconsService))
      .filter(dto => !!dto);
  }
}
