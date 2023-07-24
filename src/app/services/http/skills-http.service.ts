import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpConfigService} from '../config/http-config.service';
import {HttpService} from '../config/http.service';
import {LanguageDto} from '../../model/dtos/language-dto';
import {LanguageDtoMapper} from '../../mappers/dtos/language-dto-mapper';
import {SkillGroupDto} from '../../model/dtos/skill-group-dto';
import {SkillGroupDtoMapper} from '../../mappers/dtos/skill-group-dto-mapper';

/**
 * HTTP service for languages
 */
@Injectable({
  providedIn: 'root'
})
export class SkillsHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, '/skills');
  }

  findGroups(): Observable<SkillGroupDto[]> {
    return this.httpGet('', SkillGroupDtoMapper.fromSkillGroupJsons);
  }
}
