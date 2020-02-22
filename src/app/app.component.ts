import {Component} from '@angular/core';
import {ThemeService} from './services/theme.service';

@Component({
    selector: 'cv-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'angular-resume';

    constructor(public themeService: ThemeService) {
    }
}
