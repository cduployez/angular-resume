import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SkillEnum} from '../../../model/skill/skill-enum';
import {ActiveSkillsService} from '../../../services/ui/active-skills.service';

@Component({
    selector: 'cv-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit, OnDestroy {
    private _skillEnum: SkillEnum;

    private _skillEnums: SkillEnum[];

    @Input()
    title: string;

    @Input()
    childrenKeywords: SkillEnum[];

    mouseInside: boolean = false;

    active: boolean = false;

    constructor(private activeSkillsService: ActiveSkillsService) {
    }

    get skillEnum(): SkillEnum {
        return this._skillEnum;
    }

    @Input()
    set skillEnum(value: SkillEnum) {
        this._skillEnum = value;
        this._skillEnums = [value];
    }

    ngOnInit(): void {
        this.activeSkillsService.activeChildrenSkillEnums$.subscribe(this.checkActiveChildren.bind(this));
    }

    checkActiveChildren(skillEnums: SkillEnum[]): void {
        if (!this.mouseInside) {
            this.active = skillEnums?.some(s => this._skillEnum === s);
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
    }


    optionalClass(iconClass: SkillEnum): string {
        return iconClass ? iconClass.toString() : '';
    }


}
