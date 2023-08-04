import { LoadingMethod } from '../../model/ui/calling-method';
import { FormationsModel } from './formations-model';
import { FormationDto } from '../../model/dtos/formation-dto';
import { DateRangeUtils } from '../../utils/date-range-utils';
import { FormationsHttpService } from '../../services/http/formations-http.service';

export class FormationsController {
  readonly findAllFormationsMethod: LoadingMethod<FormationDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: FormationsModel,
    private readonly formationsHttpService: FormationsHttpService
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
        }
      });
  }
}
