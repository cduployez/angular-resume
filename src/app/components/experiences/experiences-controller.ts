import {ExperienceDto} from '../../model/dtos/experience-dto';
import {LoadingMethod} from '../../model/ui/calling-method';
import {ExperiencesHttpService} from '../../services/http/experiences-http.service';
import {ExperiencesModel} from './experiences-model';

export class ExperiencesController {
  readonly findAllExperiencesMethod: LoadingMethod<ExperienceDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: ExperiencesModel,
    private readonly experiencesHttpService: ExperiencesHttpService
  ) {
  }

  get isLoading(): boolean {
    return this.findAllExperiencesMethod.isLoading;
  }

  init(): void {
    this.findAllExperiencesMethod
      .call(() => this.experiencesHttpService.findAll())
      .subscribe({
        next: (experiences: ExperienceDto[]) => {
          this.model.experiences = experiences;
        },
        error: (error: unknown) => {
          console.error(error);
        }
      });
  }
}
