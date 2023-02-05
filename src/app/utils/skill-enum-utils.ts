import {SkillEnum} from '../model/skill/skill-enum';

export class SkillEnumUtils {

    static readonly javaKeyword: SkillEnum[] = [SkillEnum.JAVA];

    static readonly mySqlKeyword: SkillEnum[] = [SkillEnum.MYSQL];

    static readonly springKeyword: SkillEnum[] = [SkillEnum.SPRING];

    static readonly springChildrenKeywords: SkillEnum[] = SkillEnumUtils.javaKeyword;

    static readonly keycloakKeyword: SkillEnum[] = [SkillEnum.KEYCLOAK];

    static readonly javaEeKeyword: SkillEnum[] = [SkillEnum.JAVA_EE];

    static readonly javaEeChildrenKeywords: SkillEnum[] = SkillEnumUtils.javaKeyword;

    static readonly pythonKeyword: SkillEnum[] = [SkillEnum.PYTHON];

    static readonly openCvChildrenKeywords: SkillEnum[] = SkillEnumUtils.pythonKeyword;

    static readonly androidChildrenKeywords: SkillEnum[] = SkillEnumUtils.javaKeyword;

    static readonly xamarinChildrenKeywords: SkillEnum[] = [SkillEnum.C_SHARP, SkillEnum.ANDROID];

    static readonly cSharpKeyword: SkillEnum[] = [SkillEnum.C_SHARP];

    static readonly mvcNetKeyword: SkillEnum[] = [SkillEnum.MVC_NET];

    static readonly netChildrenKeywords: SkillEnum[] = SkillEnumUtils.cSharpKeyword;

    static readonly mvcNetChildrenKeywords: SkillEnum[] = [SkillEnum.C_SHARP, SkillEnum.HTML];

    static readonly angularKeyword: SkillEnum[] = [SkillEnum.ANGULAR];

    static readonly angularChildrenKeywords: SkillEnum[] = [SkillEnum.TYPESCRIPT, SkillEnum.CSS, SkillEnum.HTML];

    static readonly webKeywords: SkillEnum[] = [SkillEnum.HTML, SkillEnum.CSS, SkillEnum.JAVASCRIPT];

    static readonly apacheTapestryKeyword: SkillEnum[] = [SkillEnum.APACHE_TAPESTRY];

    static readonly apacheTapestryChildrenKeywords: SkillEnum[] = [SkillEnum.HTML, SkillEnum.CSS, SkillEnum.JAVA];

    static readonly mongoDbKeyword: SkillEnum[] = [SkillEnum.MONGODB];

    static readonly dockerKeyword: SkillEnum[] = [SkillEnum.DOCKER];

    static readonly kubernetesKeyword: SkillEnum[] = [SkillEnum.KUBERNETES];

    static readonly kubernetesChildrenKeywords: SkillEnum[] = SkillEnumUtils.dockerKeyword;

    static readonly azureKeyword: SkillEnum[] = [SkillEnum.AZURE];

    static readonly azureChildrenKeywords: SkillEnum[] = [SkillEnum.DOCKER, SkillEnum.KUBERNETES];

    static readonly openshiftKeyword: SkillEnum[] = [SkillEnum.OPENSHIFT];

    static readonly openshiftChildrenKeywords: SkillEnum[] = [SkillEnum.DOCKER, SkillEnum.KUBERNETES]

}
