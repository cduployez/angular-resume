import { HobbyDto } from '../../model/dtos/hobby-dto';
import { HobbyJson } from '../../model/jsons/hobby-json';

export class HobbyDtoMapper {
  static fromHobbyJson(json: HobbyJson): HobbyDto {
    const dto: HobbyDto = new HobbyDto();
    dto.title = json.title;
    dto.values = json.values;
    dto.ellipsis = json.ellipsis;
    return dto;
  }

  static fromHobbyJsons(jsons: HobbyJson[]): HobbyDto[] {
    return jsons.map(HobbyDtoMapper.fromHobbyJson);
  }
}
