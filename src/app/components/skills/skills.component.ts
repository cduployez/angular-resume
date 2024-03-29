import { Component, OnInit } from '@angular/core';
import { SkillItem } from '../../model/views/skill-item';
import { FaSkillItem } from '../../model/views/fa-skill-item';
import { TextSkillItem } from '../../model/views/text-skill-item';
import { JsSkillItem } from '../../model/views/js-skill-item';
import { SkillTypeEnum } from '../../model/enums/skill-type-enum';
import { SkillsHttpService } from '../../services/http/skills-http.service';
import { IconsService } from '../../services/ui/icons.service';
import { SkillsController } from './skills-controller';
import { SkillsModel } from './skills-model';
import { SkillsMessages } from './skills-messages';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills-icon-colors.component.scss']
})
export class SkillsComponent implements OnInit {
  faTypeEnum: SkillTypeEnum = SkillTypeEnum.FA;
  textTypeEnum: SkillTypeEnum = SkillTypeEnum.TEXT;
  jsTypeEnum: SkillTypeEnum = SkillTypeEnum.JS;

  /**
   * Messages of the component
   */
  readonly messages: SkillsMessages = new SkillsMessages();

  /**
   * Model of the component
   */
  readonly model: SkillsModel = new SkillsModel();

  /**
   * Controller of the component
   */
  readonly controller: SkillsController = new SkillsController(
    this.model,
    this.skillsHttpService,
    this.iconsService
  );

  /**
   * Constructor
   *
   * @param skillsHttpService HTTP service for skills
   * @param iconsService Icons service
   */
  constructor(
    private readonly skillsHttpService: SkillsHttpService,
    private readonly iconsService: IconsService
  ) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }

  faSkillItem(item: SkillItem): FaSkillItem {
    return item as FaSkillItem;
  }

  textSkillItem(item: SkillItem): TextSkillItem {
    return item as TextSkillItem;
  }

  jsSkillItem(item: SkillItem): JsSkillItem {
    return item as JsSkillItem;
  }
}
