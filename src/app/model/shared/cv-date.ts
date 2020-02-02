export class CvDate {

    /**
     * Date de début
     */
    beginDate: Date;

    /**
     * Date de fin
     */
    endDate?: Date;

    /**
     * Afficher ou non les mois
     */
    format: 'year' | 'month';

    constructor(beginDate: Date, endDate: Date, format: 'year' | 'month') {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.format = format;
    }
}
