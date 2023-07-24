import { EMPTY, finalize, Observable } from 'rxjs';

/**
 * Wrapper of an asynchronous request.
 *
 * This class avoids duplicate requests of a single call, and allows to know if a request is in progress
 */
export class LoadingMethod<T> {
  /**
   * Observable of the last request
   */
  private _observable: Observable<T> = EMPTY;

  /**
   * Indicates if there is a request in progress
   */
  private _isLoading = false;

  /**
   * Indicates if there is a request in progress
   */
  get isLoading(): boolean {
    return this._isLoading;
  }

  /**
   * Perform request and return Observable
   *
   * @param method
   */
  call(method: () => Observable<T>): Observable<T> {
    // If there is already an ongoing request, return the current observable
    if (this._isLoading) {
      return this._observable;
    }

    // Notify of new request start
    this._isLoading = true;
    const observable: Observable<T> = method().pipe(
      // Notify when request is over
      finalize(() => {
        this._isLoading = false;
      })
    );

    // Store current observable in case another request is performed
    this._observable = observable;
    return observable;
  }
}
