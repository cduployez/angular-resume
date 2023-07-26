import { ProfileDto } from 'src/app/model/dtos/profile-dto';
import { ProfileJson } from '../../model/jsons/profile-json';
import { DateUtils } from '../../utils/date-utils';

export class ProfileDtoMapper {
  static fromProfileJson(json: ProfileJson): ProfileDto {
    return new ProfileDto(
      json.firstName,
      json.lastName,
      json.email,
      DateUtils.fromMandatoryDateJson(json.birthDate),
      json.city,
      json.meansOfTransport,
      json.goals,
      json.position
    );
  }
}
