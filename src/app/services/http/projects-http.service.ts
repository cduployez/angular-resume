import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpConfigService} from '../config/http-config.service';
import {HttpService} from '../config/http.service';
import {ProjectDtoMapper} from '../../mappers/dtos/project-dto-mapper';
import {ProjectDto} from '../../model/dtos/project-dto';

/**
 * HTTP service for languages
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, '/projects');
  }

  findAll(): Observable<ProjectDto[]> {
    return this.httpGet('', ProjectDtoMapper.fromProjectJsons);
  }
}
