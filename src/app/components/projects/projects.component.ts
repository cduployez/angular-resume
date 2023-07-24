import {Component, OnInit} from '@angular/core';
import {ProjectsModel} from './projects-model';
import {ProjectsController} from './projects-controller';
import {ProjectsHttpService} from '../../services/http/projects-http.service';

@Component({
  selector: 'cv-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  /**
   * Model of the component
   */
  readonly model: ProjectsModel = new ProjectsModel();

  /**
   * Controller of the component
   */
  readonly controller: ProjectsController = new ProjectsController(this.model, this.projectsHttpService);

  /**
   * Constructor
   *
   * @param projectsHttpService HTTP service for projects
   */
  constructor(private readonly projectsHttpService: ProjectsHttpService) {
  }

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }
}
