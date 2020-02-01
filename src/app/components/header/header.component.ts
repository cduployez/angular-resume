import {Component} from '@angular/core';
import {ImageService} from '../../services/image.service';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'cv-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  constructor(public profileService: ProfileService,
              public imageService: ImageService) {
  }

}
