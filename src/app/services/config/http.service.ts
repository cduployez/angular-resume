import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpConfigService} from './http-config.service';

/**
 * Base HTTP Service for all backend REST controllers
 */
export abstract class HttpService {
  /**
   * Client for HTTP requests
   */
  private readonly httpClient: HttpClient;

  /**
   * Base URL for the back project
   */
  private readonly baseUrl: string =
    this.httpConfigService.configService.backResumeUrl;

  /**
   * Constructor
   *
   * @param httpConfigService Http Configuration for service call
   * @param serviceUrl Service part of the URL
   */
  constructor(
    protected httpConfigService: HttpConfigService,
    private readonly serviceUrl: string
  ) {
    this.httpClient = httpConfigService.httpClient;
  }

  /**
   * Perform REST GET operation
   *
   * @param url Operation part of the URL
   * @param mapFunction Function to map deserialized JSON to front-end DTO
   * @param httpParams HTTP parameters to add to the request (optional)
   * @type J Object deserialized from REST JSON transfered from backend
   * @type D DTO
   * @returns Observable of D
   */
  httpGet<J, D>(
    url: string,
    mapFunction: (json: J) => D,
    httpParams?: HttpParams
  ): Observable<D> {
    return this.httpClient
      .get<J>(this.url(url), {
        params: httpParams
      })
      .pipe(map(mapFunction));
  }

  /**
   * Get the full URL to call the back-end service for a specific operation
   *
   * @param url Operation part of the URL
   * @returns Full URL using baseUrl, serviceUrl and operationUrl
   */
  private url(url: string): string {
    return `${this.baseUrl}${this.serviceUrl}${url}`;
  }
}
