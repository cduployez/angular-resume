import { LoadingMethod } from '../../model/ui/calling-method';
import { HeaderModel } from './header-model';
import { ProfileDto } from '../../model/dtos/profile-dto';
import { ProfileHttpService } from '../../services/http/profile-http.service';

export class HeaderController {
  readonly findProfileMethod: LoadingMethod<ProfileDto> = new LoadingMethod();

  constructor(
    private readonly model: HeaderModel,
    private readonly profileHttpService: ProfileHttpService
  ) {}

  get isLoading(): boolean {
    return this.findProfileMethod.isLoading;
  }

  init(): void {
    this.findProfileMethod
      .call(() => this.profileHttpService.get())
      .subscribe({
        next: (profile: ProfileDto) => {
          this.model.profile = profile;
        },
        error: (error: unknown) => {
          console.error(error);
        }
      });
  }
}
