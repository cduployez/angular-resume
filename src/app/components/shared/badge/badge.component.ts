import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SkillBadge} from '../../../model/experience/skill-badge';
import {ActiveSkillService} from '../../../services/ui/active-skill.service';
import {SkillEnum} from '../../../model/skill/skill-enum';

@Component({
    selector: 'cv-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit, OnDestroy {

    @Input()
    badge: SkillBadge;

    active: boolean = false;

    mouseInside: boolean = false;

    constructor(private activeSkillsService: ActiveSkillService) {
    }

    ngOnInit(): void {
        this.activeSkillsService.activeSkillEnums$.subscribe(this.checkActive.bind(this));
    }

    ngOnDestroy(): void {
        this.activeSkillsService.activeSkillEnums$.unsubscribe();
    }

    checkActive(skillEnums: SkillEnum[]): void {
        if (!this.mouseInside) {
            this.active = skillEnums?.some(s => this.badge.keywords?.includes(s));
        }
    }

    enableBadge(): void {
        this.mouseInside = true;
        this.activeSkillsService.activeSkillEnums = this.badge?.keywords;
    }

    disableBadge(): void {
        this.mouseInside = false;
        this.activeSkillsService.activeSkillEnums = null;
        this.active = false;
    }

}
