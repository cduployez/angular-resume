export interface IConfig {
  /**
   * URL of the avatar image to display
   */
  avatarUrl: string;

  /**
   * Path to backend service
   */
  backResumeUrl: string;

  /**
   * LinkedIn profile URL
   */
  linkedInUrl: string;

  /**
   * Github project URL
   */
  githubUrl: string;

  /**
   * URL to download resume as PDF
   */
  pdfDownloadUrl: string;

  /**
   * Latest revision year of the project
   */
  latestRevisionYear: number;
}
