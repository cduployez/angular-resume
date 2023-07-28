import { Component, OnInit } from '@angular/core';
import { ProjectsModel } from './projects-model';
import { ProjectsController } from './projects-controller';
import { ProjectsHttpService } from '../../services/http/projects-http.service';
import { ProjectsMessages } from './projects-messages';

@Component({
  selector: 'cv-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  /**
   * Messages of the component
   */
  readonly messages: ProjectsMessages = new ProjectsMessages();

  /**
   * Model of the component
   */
  readonly model: ProjectsModel = new ProjectsModel();

  /**
   * Controller of the component
   */
  readonly controller: ProjectsController = new ProjectsController(
    this.model,
    this.messages,
    this.projectsHttpService
  );

  /**
   * Constructor
   *
   * @param projectsHttpService HTTP service for projects
   */
  constructor(private readonly projectsHttpService: ProjectsHttpService) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }
}
