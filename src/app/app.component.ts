import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/ui/theme.service';
import { ThemeEnum } from './model/ui/theme.enum';
import { BodyService } from './services/ui/body.service';

@Component({
  selector: 'cv-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private bodyService: BodyService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.themeService.themeChange$.subscribe(this.onThemeChange.bind(this));
    this.onThemeChange({
      previousTheme: null,
      currentTheme: this.themeService.theme
    });
  }

  onThemeChange(themeInfo: {
    previousTheme: ThemeEnum | null;
    currentTheme: ThemeEnum;
  }): void {
    this.bodyService.removeClass(
      this.renderer,
      themeInfo?.previousTheme?.toString()
    );
    this.bodyService.addClass(
      this.renderer,
      themeInfo?.currentTheme?.toString()
    );
  }
}
