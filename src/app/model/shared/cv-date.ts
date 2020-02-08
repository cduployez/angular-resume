import {DateUtils} from '../../utils/date-utils';

export class CvDate {

    /**
     * Afficher ou non les mois
     */
    private _format: 'year' | 'month';

    /**
     * Format utilisé par DatePipe
     */
    private _datePipeFormat: string;

    /**
     * Date de début
     */
    beginDate: Date;
    /**
     * Date de fin
     */
    endDate?: Date;

    constructor(beginDate: Date, endDate: Date, format: 'year' | 'month') {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.format = format;
    }

    /**
     * Afficher ou non les mois
     */
    get format(): 'year' | 'month' {
        return this._format;
    }

    set format(value: 'year' | 'month') {
        this._format = value;
        this.updateDatePipeFormat(value);
    }

    get datePipeFormat(): string {
        return this._datePipeFormat;
    }

    static year(year: number): CvDate {
        const date: Date = DateUtils.fromYear(year);
        return new CvDate(date, date, 'year');
    }

    static yearRange(beginDate: Date, endDate: Date): CvDate {
        return new CvDate(beginDate, endDate, 'year');
    }

    static monthRange(beginDate: Date, endDate: Date): CvDate {
        return new CvDate(beginDate, endDate, 'month');
    }

    updateDatePipeFormat(format: 'month' | 'year'): void {
        // If not defined --> default to year format
        if (!format) {
            this.updateDatePipeFormat('year');
        }
        switch (format) {
            case 'month':
                this._datePipeFormat = 'MMMM yyyy';
                break;
            case 'year':
                this._datePipeFormat = 'yyyy';
                break;
        }
    }
}
