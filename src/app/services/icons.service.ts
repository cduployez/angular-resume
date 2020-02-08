import {Injectable} from '@angular/core';
import {faAngleDoubleUp, faCode, faFilePdf, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {faJava, faLinkedin} from '@fortawesome/free-brands-svg-icons';

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

    /**
     * Font-Awesome - minus
     */
    readonly faMinus: IconDefinition = faMinus;

    /**
     * Font-Awesome - plus
     */
    readonly faPlus: IconDefinition = faPlus;

    /**
     * Font-Awesome - Java
     */
    readonly faJava: IconDefinition = faJava;

    /**
     * Font-Awesome - angle double up
     */
    readonly faAngleDoubleUp: IconDefinition = faAngleDoubleUp;
}
