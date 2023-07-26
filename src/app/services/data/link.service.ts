import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LinkService {
  /**
   * URL vers le profil LinkedIn
   */
  readonly linkedInUrl: string = 'https://www.linkedin.com/in/clementduployez/';

  readonly githubUrl: string = 'https://github.com/cduployez/angular-resume';

  /**
   * URL de téléchargement du CV au format PDF
   * 'dl=1' permet de lancer le téléchargement directement
   */
  readonly pdfDownloadUrl: string =
    'https://www.dropbox.com/s/4mzxkjmmnpxmu43/CV%20Cl%C3%A9ment%20Duployez%202023%20Linkedin.pdf?dl=1';
}
