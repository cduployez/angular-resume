import {LoadingMethod} from '../../model/ui/calling-method';
import {LanguageDto} from '../../model/dtos/language-dto';
import {FormationsModel} from './formations-model';
import {LanguagesHttpService} from '../../services/http/languages-http.service';
import {FormationDto} from '../../model/dtos/formation-dto';

export class FormationsController {
  readonly findAllFormationsMethod: LoadingMethod<LanguageDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: FormationsModel,
    private readonly formationsHttpService: LanguagesHttpService
  ) {
  }

  get isLoading(): boolean {
    return this.findAllFormationsMethod.isLoading;
  }

  init(): void {
    this.findAllFormationsMethod
      .call(() => this.formationsHttpService.findAll())
      .subscribe({
        next: (formations: FormationDto[]) => {
          this.model.formations = formations;
        },
        error: (error: unknown) => {
          console.error(error);
        }
      });
  }
}
