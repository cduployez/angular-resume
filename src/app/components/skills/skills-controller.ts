import {LoadingMethod} from '../../model/ui/calling-method';
import {SkillGroupDto} from '../../model/dtos/skill-group-dto';
import {SkillsModel} from './skills-model';
import {SkillsHttpService} from '../../services/http/skills-http.service';
import {SkillGroupMapper} from '../../mappers/views/skill-group-mapper';
import {IconsService} from '../../services/ui/icons.service';

export class SkillsController {
  readonly findSkillGroupsMethod: LoadingMethod<SkillGroupDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: SkillsModel,
    private readonly skillsHttpService: SkillsHttpService,
    private readonly iconsService: IconsService
  ) {
  }

  get isLoading(): boolean {
    return this.findSkillGroupsMethod.isLoading;
  }

  init(): void {
    this.findSkillGroupsMethod
      .call(() => this.skillsHttpService.findGroups())
      .subscribe({
        next: (skillGroups: SkillGroupDto[]) => {
          this.model.skillGroups = SkillGroupMapper.fromSkillGroupDtos(skillGroups, this.iconsService);
        },
        error: (error: unknown) => {
          console.error(error);
        }
      });
  }
}
