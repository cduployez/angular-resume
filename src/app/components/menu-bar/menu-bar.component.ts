import {Component} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {IconsService} from '../../services/icons.service';
import {LinkService} from '../../services/link.service';
import {SessionStorageService} from '../../services/session-storage.service';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {ThemeService} from '../../services/theme.service';
import {ThemeEnum} from '../../model/enums/theme.enum';

@Component({
    selector: 'cv-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

    themeIcon: IconDefinition;

    constructor(public projectService: ProjectService,
                public linkService: LinkService,
                public iconsService: IconsService,
                private themeService: ThemeService,
                private sessionStorageService: SessionStorageService) {
        this.updateThemeIcon(themeService.theme);
    }

    get minimized(): boolean {
        return this.sessionStorageService.menuBarMinimized;
    }

    set minimized(value: boolean) {
        this.sessionStorageService.menuBarMinimized = value;
    }

    nextTheme(): void {
        const theme: ThemeEnum = this.themeService.nextTheme();
        this.updateThemeIcon(theme);
    }

    private updateThemeIcon(theme: ThemeEnum): void {
        switch (theme) {
            case ThemeEnum.DARK:
                this.themeIcon = this.iconsService.faMoonSolid;
                break;
            default:
                this.themeIcon = this.iconsService.faMoonRegular;
                break;
        }
    }
}
