import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SkillEnum } from "../../enums/skill.enum";
import { SkillTypeEnum } from "../skill-type-enum";
import { SkillItem } from "./skill-item";

export class FaSkillItem extends SkillItem {
  faIcon: IconDefinition;

  constructor(
    title: string,
    skillEnum: SkillEnum,
    keywords: SkillEnum[],
    faIcon: IconDefinition
  ) {
    super(title, skillEnum, keywords, SkillTypeEnum.FA);
    this.faIcon = faIcon;
  }
}
