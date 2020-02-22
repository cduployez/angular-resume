import {Injectable} from '@angular/core';
import {SessionStorageService} from './session-storage.service';
import {ThemeEnum} from '../model/enums/theme.enum';

@Injectable({providedIn: 'root'})
export class ThemeService {
    private _theme: ThemeEnum;

    constructor(private sessionStorageService: SessionStorageService) {
        this._theme = sessionStorageService.theme;
        if (!this._theme) {
            this.theme = ThemeEnum.DEFAULT;
        }
    }

    get theme(): ThemeEnum {
        return this._theme;
    }

    set theme(theme: ThemeEnum) {
        theme = theme ? theme : ThemeEnum.DEFAULT;
        this._theme = theme;
        this.sessionStorageService.theme = theme;
    }

}
