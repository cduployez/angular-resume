import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpConfigService } from '../config/http-config.service';
import { HttpService } from '../config/http.service';
import { HobbyDtoMapper } from '../../mappers/dtos/hobby-dto-mapper';
import { HobbyDto } from '../../model/dtos/hobby-dto';

/**
 * HTTP service for languages
 */
@Injectable({
  providedIn: 'root',
})
export class HobbiesHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, '/hobbies');
  }

  findAll(): Observable<HobbyDto[]> {
    return this.httpGet('', HobbyDtoMapper.fromHobbyJsons);
  }
}
