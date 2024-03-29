import { DateRangeDtoMapper } from './date-range-dto-mapper';
import { FormationJson } from '../../model/jsons/formation-json';
import { FormationDto } from '../../model/dtos/formation-dto';

export class FormationDtoMapper {
  static fromFormationJson(json: FormationJson): FormationDto {
    return new FormationDto(
      DateRangeDtoMapper.fromDateRangeJson(json.dateRange),
      json.title,
      json.descriptions
    );
  }

  static fromFormationJsons(jsons: FormationJson[]): FormationDto[] {
    return jsons.map(FormationDtoMapper.fromFormationJson);
  }
}
