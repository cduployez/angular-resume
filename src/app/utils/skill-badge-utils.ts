import {SkillBadge} from '../model/experience/skill-badge';
import {SkillEnumUtils} from './skill-enum-utils';
import {SkillEnum} from '../model/skill/skill-enum';

export class SkillBadgeUtils {

    static readonly java: SkillBadge = new SkillBadge('Java', SkillEnumUtils.javaKeyword);

    static readonly cSharp: SkillBadge = new SkillBadge('C#', SkillEnumUtils.cSharpKeyword);

    static readonly cPlusPlus: SkillBadge = new SkillBadge('C++', [SkillEnum.C_PLUS_PLUS]);

}
