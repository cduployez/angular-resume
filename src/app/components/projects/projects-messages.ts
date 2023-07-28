export class ProjectsMessages {
  /**
   * Category title
   */
  readonly categoryTitle: string = 'Projets informations';

  teamSizeFormat(teamSize: number): string {
    return `${teamSize} personnes`;
  }
}
