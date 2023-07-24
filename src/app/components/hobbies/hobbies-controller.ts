import { LoadingMethod } from '../../model/ui/calling-method';
import { HobbiesHttpService } from '../../services/http/hobbies-http.service';
import { HobbyDto } from '../../model/dtos/hobby-dto';
import { HobbiesModel } from './hobbies-model';

export class HobbiesController {
  readonly findAllHobbiesMethod: LoadingMethod<HobbyDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: HobbiesModel,
    private readonly hobbiesHttpService: HobbiesHttpService
  ) {}

  get isLoading(): boolean {
    return this.findAllHobbiesMethod.isLoading;
  }

  init(): void {
    this.findAllHobbiesMethod
      .call(() => this.hobbiesHttpService.findAll())
      .subscribe({
        next: (hobbies: HobbyDto[]) => {
          this.model.hobbies = hobbies;
        },
        error: (error: unknown) => {
          console.error(error);
        },
      });
  }
}
