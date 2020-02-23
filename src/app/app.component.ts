import {Component, OnInit, Renderer2} from '@angular/core';
import {ThemeService} from './services/theme.service';
import {ThemeEnum} from './model/enums/theme.enum';

@Component({
    selector: 'cv-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private themeService: ThemeService,
                private renderer2: Renderer2) {

    }

    ngOnInit(): void {
        this.themeService.themeChange$.subscribe(this.onThemeChange.bind(this));
        this.onThemeChange({previousTheme: null, currentTheme: this.themeService.theme});
    }

    onThemeChange(themeInfo: { previousTheme: ThemeEnum, currentTheme: ThemeEnum }): void {
        if (themeInfo.previousTheme) {
            this.renderer2.removeClass(window.document.body, themeInfo.previousTheme);
        }
        if (themeInfo.currentTheme) {
            this.renderer2.addClass(window.document.body, themeInfo.currentTheme);
        }
    }
}
