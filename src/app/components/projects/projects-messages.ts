export class ProjectsMessages {
  /**
   * Category title
   */
  readonly categoryTitle: string = 'Projets informatiques';

  teamSizeFormat(teamSize: number): string {
    return `${teamSize} personnes`;
  }
}
