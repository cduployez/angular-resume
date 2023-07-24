import { LoadingMethod } from '../../model/ui/calling-method';
import { LanguageDto } from '../../model/dtos/language-dto';
import { LanguagesModel } from './languages-model';
import { LanguagesHttpService } from '../../services/http/languages-http.service';
import { DateRangeUtils } from '../../utils/date-range-utils';

export class LanguagesController {
  readonly findAllLanguagesMethod: LoadingMethod<LanguageDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: LanguagesModel,
    private readonly languagesHttpService: LanguagesHttpService
  ) {}

  get isLoading(): boolean {
    return this.findAllLanguagesMethod.isLoading;
  }

  init(): void {
    this.findAllLanguagesMethod
      .call(() => this.languagesHttpService.findAll())
      .subscribe({
        next: (languages: LanguageDto[]) => {
          this.model.languages = DateRangeUtils.sortByBeginDateDesc(
            languages,
            (language: LanguageDto) => language.dateRange
          );
        },
        error: (error: unknown) => {
          console.error(error);
        },
      });
  }
}
