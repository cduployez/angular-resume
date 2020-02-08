import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
