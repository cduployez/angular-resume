import {SkillEnum} from '../model/skill/skill-enum';

export class SkillEnumUtils {

    static readonly javaKeyword: SkillEnum[] = [SkillEnum.JAVA];

    static readonly mySqlKeyword: SkillEnum[] = [SkillEnum.MYSQL];

    static readonly springKeyword: SkillEnum[] = [SkillEnum.SPRING];

    static readonly springChildrenKeywords: SkillEnum[] = SkillEnumUtils.javaKeyword;

    static readonly keycloakKeyword: SkillEnum[] = [SkillEnum.KEYCLOAK];

    static readonly javaEeKeyword: SkillEnum[] = [SkillEnum.JAVA_EE];

    static readonly javaEeChildrenKeywords: SkillEnum[] = SkillEnumUtils.javaKeyword;

    static readonly androidChildrenKeywords: SkillEnum[] = SkillEnumUtils.javaKeyword;

    static readonly cSharpKeyword: SkillEnum[] = [SkillEnum.C_SHARP];

    static readonly mvcNetKeyword: SkillEnum[] = [SkillEnum.MVC_NET];

    static readonly mvcNetChildrenKeywords: SkillEnum[] = [SkillEnum.C_SHARP, SkillEnum.HTML];

    static readonly angularKeyword: SkillEnum[] = [SkillEnum.ANGULAR];

    static readonly angularChildrenKeywords: SkillEnum[] = [SkillEnum.TYPESCRIPT, SkillEnum.CSS, SkillEnum.HTML];

    static readonly webKeywords: SkillEnum[] = [SkillEnum.HTML, SkillEnum.CSS, SkillEnum.JAVASCRIPT];

    static readonly mongoDbKeyword: SkillEnum[] = [SkillEnum.MONGODB];

    static readonly dockerKeyword: SkillEnum[] = [SkillEnum.DOCKER];

    static readonly linuxKeyword: SkillEnum[] = [SkillEnum.LINUX];
}
