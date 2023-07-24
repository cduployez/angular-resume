import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

/**
 * Service to store http configurations
 */
@Injectable({
  providedIn: 'root',
})
export class HttpConfigService {
  constructor(
    public configService: ConfigService,
    public httpClient: HttpClient
  ) {}
}
