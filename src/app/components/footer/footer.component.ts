import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../services/ui/icons.service';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public iconsService: IconsService) {}

  ngOnInit(): void {}

  scrollTop(): void {
    window.scroll(0, 0);
  }
}
