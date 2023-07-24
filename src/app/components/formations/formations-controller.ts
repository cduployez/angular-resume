import { LoadingMethod } from '../../model/ui/calling-method';
import { LanguageDto } from '../../model/dtos/language-dto';
import { FormationsModel } from './formations-model';
import { LanguagesHttpService } from '../../services/http/languages-http.service';
import { FormationDto } from '../../model/dtos/formation-dto';
import { DateRangeUtils } from '../../utils/date-range-utils';

export class FormationsController {
  readonly findAllFormationsMethod: LoadingMethod<LanguageDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: FormationsModel,
    private readonly formationsHttpService: LanguagesHttpService
  ) {}

  get isLoading(): boolean {
    return this.findAllFormationsMethod.isLoading;
  }

  init(): void {
    this.findAllFormationsMethod
      .call(() => this.formationsHttpService.findAll())
      .subscribe({
        next: (formations: FormationDto[]) => {
          this.model.formations = DateRangeUtils.sortByBeginDateDesc(
            formations,
            (formation: FormationDto) => formation.dateRange
          );
        },
        error: (error: unknown) => {
          console.error(error);
        },
      });
  }
}
