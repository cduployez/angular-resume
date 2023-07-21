import {Injectable} from '@angular/core';
import {IEnvironment} from '../../model/config/ienvironment';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';
import {IConfig} from '../../model/config/iconfig';

/**
 * Based on: https://imran3.medium.com/runtime-configuration-for-angular-c9d9082e1de3
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService implements IConfig {

  /**
   * Indicates if the config is loaded
   */
  loaded: boolean = false;

  /**
   * Config
   * @private
   */
  private config: IConfig;

  /**
   * Constructor
   *
   * @param httpClient Angular HTTP client
   */
  constructor(private httpClient: HttpClient) {
  }

  get backResumeUrl(): string {
    return this.config.backResumeUrl;
  }

  load(): Promise<void> {
    return lastValueFrom(this.httpClient
      .get<IConfig>('/assets/config/config.json'))
      .then((config: IConfig) => {
        this.config = config;
        this.loaded = true;
      });
  }
}
