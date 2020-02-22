import {Injectable} from '@angular/core';
import {ThemeEnum} from '../model/enums/theme.enum';

const KEY_MENU_BAR_MINIMIZED: string = 'menuBarMinimized';
const KEY_THEME: string = 'theme';

@Injectable({providedIn: 'root'})
export class SessionStorageService {

    private _menuBarMinimized: boolean = false;
    private _theme: ThemeEnum;

    constructor() {
        this._menuBarMinimized = sessionStorage[KEY_MENU_BAR_MINIMIZED] === 'true' || false;
    }

    get theme(): ThemeEnum {
        return this._theme;
    }

    set theme(theme: ThemeEnum) {
        this._theme = theme ? theme : ThemeEnum.DEFAULT;
        sessionStorage[KEY_THEME] = theme;
    }

    get menuBarMinimized(): boolean {
        return this._menuBarMinimized;
    }

    set menuBarMinimized(minimized: boolean) {
        this._menuBarMinimized = minimized;
        sessionStorage[KEY_MENU_BAR_MINIMIZED] = minimized;
    }

}
