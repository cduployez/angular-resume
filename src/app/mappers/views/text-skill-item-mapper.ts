import { SkillDto } from '../../model/dtos/skill-dto';
import { TextSkillItem } from '../../model/skill/skill-item/text-skill-item';

export class TextSkillItemMapper {
  static fromSkillDto(dto: SkillDto, iconText: string): TextSkillItem {
    return new TextSkillItem(
      dto.title,
      dto.keyword,
      dto.childrenKeywords,
      iconText
    );
  }
}
