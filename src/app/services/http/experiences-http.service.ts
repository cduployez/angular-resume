import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExperienceDtoMapper } from "../../mappers/dtos/experience-dto-mapper";
import { ExperienceDto } from "../../model/dtos/experience-dto";
import { HttpConfigService } from "../config/http-config.service";
import { HttpService } from "../config/http.service";

@Injectable({
  providedIn: "root",
})
export class ExperiencesHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, "/experiences");
  }

  findAll(): Observable<ExperienceDto[]> {
    return this.httpGet("", ExperienceDtoMapper.fromExperienceJsons);
  }
}
