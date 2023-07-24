import {LanguageJson} from '../../model/jsons/language-json';
import {LanguageDto} from '../../model/dtos/language-dto';
import {DateRangeDtoMapper} from './date-range-dto-mapper';

export class FormationDtoMapper {
  static fromFormationJson(json: LanguageJson): LanguageDto {
    const dto: LanguageDto = new LanguageDto();
    dto.dateRange = DateRangeDtoMapper.fromDateRangeJson(json.dateRange);
    dto.title = json.title;
    dto.descriptions = json.descriptions;
    return dto;
  }

  static fromFormationJsons(jsons: LanguageJson[]): LanguageDto[] {
    return jsons.map(FormationDtoMapper.fromFormationJson);
  }
}
