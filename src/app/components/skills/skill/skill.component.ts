import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { SkillEnum } from "../../../model/enums/skill.enum";
import { ActiveSkillsService } from "../../../services/ui/active-skills.service";
import { SkillMessages } from "./skill-messages";

@Component({
  selector: "cv-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit, OnDestroy {
  readonly messages: SkillMessages = new SkillMessages();

  private _skillEnum: SkillEnum;

  private _skillEnums: SkillEnum[];

  @Input()
  title: string;

  @Input()
  childrenKeywords: SkillEnum[];

  mouseInside: boolean = false;

  active: boolean = false;

  childrenActive: boolean = false;

  constructor(private activeSkillsService: ActiveSkillsService) {}

  get skillEnum(): SkillEnum {
    return this._skillEnum;
  }

  @Input()
  set skillEnum(value: SkillEnum) {
    this._skillEnum = value;
    this._skillEnums = [value];
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
      this.active = skillEnums?.some((s) => this._skillEnum === s);
    }
  }

  checkActiveChildren(skillEnums: SkillEnum[]): void {
    if (!this.mouseInside) {
      this.childrenActive = skillEnums?.some((s) => this._skillEnum === s);
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
    this.activeSkillsService.activeSkillEnums = null;
    this.activeSkillsService.activeChildrenSkillEnums = null;
    this.active = false;
    this.childrenActive = false;
  }

  optionalClass(skillEnum: SkillEnum): string {
    return skillEnum ? this.messages.skillCssClass(skillEnum) : "";
  }
}
