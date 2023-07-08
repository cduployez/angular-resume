import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EnvironmentService } from "./environment.service";

/**
 * Service to store http configurations
 */
@Injectable({
  providedIn: "root",
})
export class HttpConfigService {
  constructor(
    public environment: EnvironmentService,
    public httpClient: HttpClient
  ) {}
}
