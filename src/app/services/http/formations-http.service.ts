import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpConfigService } from '../config/http-config.service';
import { HttpService } from '../config/http.service';
import { FormationDto } from '../../model/dtos/formation-dto';
import { FormationDtoMapper } from '../../mappers/dtos/formation-dto-mapper';

/**
 * HTTP service for languages
 */
@Injectable({
  providedIn: 'root',
})
export class FormationsHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, '/formations');
  }

  findAll(): Observable<FormationDto[]> {
    return this.httpGet('', FormationDtoMapper.fromFormationJsons);
  }
}
