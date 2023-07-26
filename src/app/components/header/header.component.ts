import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/ui/image.service';
import { ThemeService } from '../../services/ui/theme.service';
import { HeaderModel } from './header-model';
import { HeaderController } from './header-controller';
import { ProfileHttpService } from '../../services/http/profile-http.service';
import { HeaderMessages } from './header-messages';

@Component({
  selector: 'cv-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Messages of the component
   */
  readonly messages: HeaderMessages = new HeaderMessages();

  /**
   * Model of the component
   */
  readonly model: HeaderModel = new HeaderModel(this.messages);
  /**
   * Controller of the component
   */
  readonly controller: HeaderController = new HeaderController(
    this.model,
    this.profileHttpService
  );

  /**
   * Constructor
   *
   * @param profileHttpService HTTP service for profile
   * @param imageService Image service
   * @param themeService Theme service
   */
  constructor(
    private readonly profileHttpService: ProfileHttpService,
    public readonly imageService: ImageService,
    public readonly themeService: ThemeService
  ) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }
}
