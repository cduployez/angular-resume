import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpConfigService} from '../config/http-config.service';
import {HttpService} from '../config/http.service';
import {LanguageDto} from '../../model/dtos/language-dto';
import {LanguageDtoMapper} from '../../mappers/dtos/language-dto-mapper';

/**
 * HTTP service for languages
 */
@Injectable({
  providedIn: 'root'
})
export class LanguagesHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, '/languages');
  }

  findAll(): Observable<LanguageDto[]> {
    return this.httpGet('', LanguageDtoMapper.fromLanguageJsons);
  }
}
