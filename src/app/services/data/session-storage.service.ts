import { Injectable } from '@angular/core';
import { ThemeEnum } from '../../model/ui/theme.enum';

const KEY_MENU_BAR_MINIMIZED = 'menuBarMinimized';
const KEY_THEME = 'theme';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  constructor() {
    this._menuBarMinimized =
      sessionStorage[KEY_MENU_BAR_MINIMIZED] === 'true' || false;
    this._theme = sessionStorage[KEY_THEME];
  }

  private _menuBarMinimized = false;

  get menuBarMinimized(): boolean {
    return this._menuBarMinimized;
  }

  set menuBarMinimized(minimized: boolean) {
    this._menuBarMinimized = minimized;
    sessionStorage[KEY_MENU_BAR_MINIMIZED] = minimized;
  }

  private _theme: ThemeEnum;

  get theme(): ThemeEnum {
    return this._theme;
  }

  set theme(theme: ThemeEnum) {
    this._theme = theme;
    sessionStorage[KEY_THEME] = theme;
  }
}
