import {Injectable} from '@angular/core';
import {faCode, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Injectable({providedIn: 'root'})
export class IconsService {

    /**
     * Font-Awesome - code
     */
    readonly faCode: IconDefinition = faCode;

    /**
     * Font-Awesome - file-pdf
     */
    readonly faFilePdf: IconDefinition = faFilePdf;

    /**
     * Font-Awesome - linkedin
     */
    readonly faLinkedIn: IconDefinition = faLinkedin;

}
