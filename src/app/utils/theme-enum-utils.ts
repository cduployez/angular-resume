import { ThemeEnum } from '../model/ui/theme.enum';

export class ThemeEnumUtils {
  static isOsInDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)')?.matches;
  }

  static defaultTheme(): ThemeEnum {
    return this.isOsInDarkMode() ? ThemeEnum.DARK : ThemeEnum.LIGHT;
  }
}
