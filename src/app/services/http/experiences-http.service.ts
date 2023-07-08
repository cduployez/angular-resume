import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExperienceItem } from "../../model/experience/experience-item";
import { HttpConfigService } from "../config/http-config.service";
import { HttpService } from "../config/http.service";

@Injectable({
  providedIn: "root",
})
export class ExperiencesHttpService extends HttpService {
  constructor(httpConfigService: HttpConfigService) {
    super(httpConfigService, "/experiences");
  }

  findAll(): Observable<ExperienceItem[]> {
    return this.httpGet("", (jsonArray: ExperienceItem[]) => jsonArray);
  }
}
