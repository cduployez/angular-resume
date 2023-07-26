import { ProfileDto } from '../../model/dtos/profile-dto';
import { HeaderMessages } from './header-messages';

export class HeaderModel {
  leftInfoList: string[] = [];
  rightInfoList: string[] = [];

  constructor(private readonly messages: HeaderMessages) {}

  private _profile: ProfileDto | null = null;

  get profile(): ProfileDto | null {
    return this._profile;
  }

  set profile(profile: ProfileDto | null) {
    this._profile = profile;
    if (profile) {
      this.leftInfoList = [
        this.messages.ageWithSuffix(profile.age),
        profile.city || ''
      ];

      this.rightInfoList = profile.meansOfTransport;
    } else {
      this.leftInfoList = [];
      this.rightInfoList = [];
    }
  }
}
