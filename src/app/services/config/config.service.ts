import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { IConfig } from '../../model/config/iconfig';
import { environment } from '../../../environments/environment';

/**
 * Based on: https://imran3.medium.com/runtime-configuration-for-angular-c9d9082e1de3
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService implements IConfig {
  /**
   * Config
   * @private
   */
  private config: IConfig | null = null;

  /**
   * Constructor
   *
   * @param httpClient Angular HTTP client
   */
  constructor(private httpClient: HttpClient) {}

  get avatarUrl(): string {
    return this.config?.avatarUrl || '';
  }

  get backResumeUrl(): string {
    return this.config?.backResumeUrl || '';
  }

  load(): Promise<void> {
    return lastValueFrom(
      this.httpClient.get<IConfig>(
        `assets/config/${environment.configFileName}`
      )
    ).then((config: IConfig) => {
      this.config = config;
    });
  }
}
