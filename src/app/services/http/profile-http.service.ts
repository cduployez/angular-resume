import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpConfigService } from '../config/http-config.service';
import { HttpService } from '../config/http.service';
import { ProfileDtoMapper } from '../../mappers/dtos/profile-dto-mapper';
import { ProfileDto } from '../../model/dtos/profile-dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, '/profile');
  }

  get(): Observable<ProfileDto> {
    return this.httpGet('', ProfileDtoMapper.fromProfileJson);
  }
}
