import {Injectable} from '@angular/core';
import {faAngleDoubleUp, faCode, faDatabase, faFeather, faFilePdf, faKey, faLeaf, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {
    faAndroid,
    faAngular,
    faCss3Alt,
    faEnvira,
    faGitAlt,
    faHtml5,
    faJava,
    faLinkedin,
    faPython
} from '@fortawesome/free-brands-svg-icons';

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
     * Font-Awesome - leaf
     * Used for Spring Framework
     */
    readonly faLeaf: IconDefinition = faLeaf;

    /**
     * Font-Awesome - angle double up
     */
    readonly faAngleDoubleUp: IconDefinition = faAngleDoubleUp;

    /**
     * Font-Awesome - Java
     */
    readonly faJava: IconDefinition = faJava;

    /**
     * Font-Awesome - Python
     */
    readonly faPython: IconDefinition = faPython;

    /**
     * Font-Awesome - Android
     */
    readonly faAndroid: IconDefinition = faAndroid;

    /**
     * Font-Awesome - Angular
     */
    readonly faAngular: IconDefinition = faAngular;

    /**
     * Font-Awesome - HTML 5
     */
    readonly faHtml5: IconDefinition = faHtml5;

    /**
     * Font-Awesome - CSS 3
     */
    readonly faCss3: IconDefinition = faCss3Alt;

    /**
     * Font-Awesome - Git
     */
    readonly faGit: IconDefinition = faGitAlt;

    /**
     * Font-Awesome - Database
     * Used for MySQL
     */
    readonly faDatabase: IconDefinition = faDatabase;

    /**
     * Font-Awesome - Key
     * Used for Keycloak
     */
    readonly faKey: IconDefinition = faKey;

    /**
     * Font-Awesome - Feather
     * Used for Maven
     */
    readonly faFeather: IconDefinition = faFeather;

    /**
     * Font-Awesome - Envira
     * Used for MongoDB
     */
    readonly faEnvira: IconDefinition = faEnvira;

}