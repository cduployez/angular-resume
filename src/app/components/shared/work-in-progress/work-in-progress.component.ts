import { Component } from '@angular/core';
import { IconsService } from '../../../services/ui/icons.service';

@Component({
  selector: 'cv-work-in-progress',
  templateUrl: 'work-in-progress.component.html',
  styleUrls: ['work-in-progress.component.scss'],
})
export class WorkInProgressComponent {
  constructor(public iconsService: IconsService) {}
}
