export type IEnvironment = {
  production: boolean;
  /**
   * Indicates if config.json from assets should be loaded
   */
  includeConfig: boolean;
  defaultBackResumeUrl: string;
};
