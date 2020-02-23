import {Injectable} from '@angular/core';
import {SessionStorageService} from './session-storage.service';
import {ThemeEnum} from '../model/enums/theme.enum';
import {Subject} from 'rxjs';
import {ThemeEnumUtils} from '../utils/theme-enum-utils';

const THEMES: ThemeEnum[] = Object.keys(ThemeEnum).map(k => ThemeEnum[k]);

@Injectable({providedIn: 'root'})
export class ThemeService {

    private _theme: ThemeEnum;

    themeChange$: Subject<{ previousTheme: ThemeEnum, currentTheme: ThemeEnum }> =
        new Subject<{ previousTheme: ThemeEnum, currentTheme: ThemeEnum }>();

    constructor(private sessionStorageService: SessionStorageService) {
        this._theme = sessionStorageService.theme;
        if (!this._theme) {
            this.theme = ThemeEnumUtils.defaultTheme();
        }
    }

    get theme(): ThemeEnum {
        return this._theme;
    }

    set theme(theme: ThemeEnum) {
        theme = theme ? theme : ThemeEnumUtils.defaultTheme();
        const previousTheme: ThemeEnum = this._theme;
        this._theme = theme;
        this.sessionStorageService.theme = theme;
        this.themeChange$.next({previousTheme, currentTheme: theme});
    }

    nextTheme(): ThemeEnum {
        const currentIndex = THEMES.indexOf(this.theme);
        this.theme = THEMES[(currentIndex + 1) % THEMES.length];
        return this.theme;
    }

}
