import { Component, OnInit } from '@angular/core';
import {IconsService} from '../../services/icons.service';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public iconsService: IconsService) { }

  ngOnInit(): void {
  }

}
