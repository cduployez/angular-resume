import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LinkService {

    /**
     * URL vers le profil LinkedIn
     */
    readonly linkedInUrl: string = 'https://www.linkedin.com/in/clementduployez/';

    /**
     * URL de téléchargement du CV au format PDF
     * 'dl=1' permet de lancer le téléchargement directement
     */
    readonly pdfDownloadUrl: string =
        'https://www.dropbox.com/s/mcoqdci1i8iw8ay/CV%20Cl%C3%A9ment%20Duployez%202020%20-%20LinkedIn.pdf?dl=1';

}
