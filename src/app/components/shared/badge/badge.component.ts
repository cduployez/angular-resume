import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { SkillBadgeDto } from "../../../model/dtos/skill-badge-dto";
import { SkillEnum } from "../../../model/enums/skill.enum";
import { ActiveSkillsService } from "../../../services/ui/active-skills.service";

@Component({
  selector: "cv-badge",
  templateUrl: "./badge.component.html",
  styleUrls: ["./badge.component.scss"],
})
export class BadgeComponent implements OnInit, OnDestroy {
  @Input()
  badge: SkillBadgeDto;

  active = false;

  mouseInside = false;

  constructor(private activeSkillsService: ActiveSkillsService) {}

  ngOnInit(): void {
    this.activeSkillsService.activeSkillEnums$.subscribe(
      this.checkActive.bind(this)
    );
  }

  ngOnDestroy(): void {
    this.activeSkillsService.activeSkillEnums$.unsubscribe();
  }

  checkActive(skillEnums: SkillEnum[]): void {
    if (!this.mouseInside) {
      this.active = skillEnums?.some((s: SkillEnum) =>
        this.badge.keywords?.includes(s)
      );
    }
  }

  enableBadge(): void {
    this.mouseInside = true;
    this.activeSkillsService.activeSkillEnums = this.badge?.keywords;
    this.activeSkillsService.activeChildrenSkillEnums =
      this.badge?.childrenKeywords;
  }

  disableBadge(): void {
    this.mouseInside = false;
    this.activeSkillsService.activeSkillEnums = null;
    this.activeSkillsService.activeChildrenSkillEnums = null;
    this.active = false;
  }
}
