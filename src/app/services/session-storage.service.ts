import {Injectable} from '@angular/core';

const KEY_MENU_BAR_MINIMIZED: string = 'menuBarMinimized';

@Injectable({providedIn: 'root'})
export class SessionStorageService {

    constructor() {
        this._menuBarMinimized = sessionStorage[KEY_MENU_BAR_MINIMIZED] || false;
    }

    private _menuBarMinimized: boolean = false;

    get menuBarMinimized(): boolean {
        return this._menuBarMinimized;
    }

    set menuBarMinimized(minimized: boolean) {
        this._menuBarMinimized = minimized;
        sessionStorage[KEY_MENU_BAR_MINIMIZED] = minimized;
    }

}
