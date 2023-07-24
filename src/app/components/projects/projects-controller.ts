import { LoadingMethod } from '../../model/ui/calling-method';
import { ProjectsHttpService } from '../../services/http/projects-http.service';
import { ProjectDto } from '../../model/dtos/project-dto';
import { ProjectsModel } from './projects-model';

export class ProjectsController {
  readonly findAllProjectsMethod: LoadingMethod<ProjectDto[]> =
    new LoadingMethod();

  constructor(
    private readonly model: ProjectsModel,
    private readonly projectsHttpService: ProjectsHttpService
  ) {}

  get isLoading(): boolean {
    return this.findAllProjectsMethod.isLoading;
  }

  init(): void {
    this.findAllProjectsMethod
      .call(() => this.projectsHttpService.findAll())
      .subscribe({
        next: (projects: ProjectDto[]) => {
          this.model.projects = projects;
        },
        error: (error: unknown) => {
          console.error(error);
        },
      });
  }
}
