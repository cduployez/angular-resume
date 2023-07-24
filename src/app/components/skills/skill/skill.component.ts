import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SkillEnum } from '../../../model/enums/skill.enum';
import { ActiveSkillsService } from '../../../services/ui/active-skills.service';
import { SkillMessages } from './skill-messages';

@Component({
  selector: 'cv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit, OnDestroy {
  readonly messages: SkillMessages = new SkillMessages();

  @Input()
  title: string = '';

  @Input()
  childrenKeywords: SkillEnum[] = [];

  mouseInside: boolean = false;

  active: boolean = false;

  childrenActive: boolean = false;

  private _skillEnums: SkillEnum[] = [];

  constructor(private activeSkillsService: ActiveSkillsService) {}

  private _skillEnum: SkillEnum | null = null;

  get skillEnum(): SkillEnum | null {
    return this._skillEnum;
  }

  @Input()
  set skillEnum(value: SkillEnum | null) {
    this._skillEnum = value;
    this._skillEnums = value ? [value] : [];
  }

  ngOnInit(): void {
    this.activeSkillsService.activeSkillEnums$.subscribe(
      this.checkActive.bind(this)
    );
    this.activeSkillsService.activeChildrenSkillEnums$.subscribe(
      this.checkActiveChildren.bind(this)
    );
  }

  checkActive(skillEnums: SkillEnum[]): void {
    if (!this.mouseInside) {
      this.active = skillEnums?.some(s => this._skillEnum === s);
    }
  }

  checkActiveChildren(skillEnums: SkillEnum[]): void {
    if (!this.mouseInside) {
      this.childrenActive = skillEnums?.some(s => this._skillEnum === s);
    }
  }

  ngOnDestroy(): void {
    this.activeSkillsService.activeSkillEnums$.unsubscribe();
  }

  enableBadge(): void {
    this.mouseInside = true;
    this.activeSkillsService.activeSkillEnums = this._skillEnums;
    this.activeSkillsService.activeChildrenSkillEnums = this.childrenKeywords;
  }

  disableBadge(): void {
    this.mouseInside = false;
    this.activeSkillsService.activeSkillEnums = [];
    this.activeSkillsService.activeChildrenSkillEnums = [];
    this.active = false;
    this.childrenActive = false;
  }

  optionalClass(skillEnum: SkillEnum | null): string {
    return skillEnum ? this.messages.skillCssClass(skillEnum) : '';
  }
}
