import {DateUtils} from '../../utils/date-utils';

export class CvDate {

    /**
     * Format utilisé par DatePipe
     */
    readonly datePipeFormat: 'MMMM yyyy' | 'yyyy';

    /**
     * Date de début
     */
    beginDate: Date;
    /**
     * Date de fin
     */
    endDate?: Date;

    /**
     * Constructor
     *
     * @param beginDate Begin date
     * @param endDate End date
     * @param format Display months or only years
     */
    private constructor(beginDate: Date, endDate: Date, format: 'year' | 'month') {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.datePipeFormat = this.initDatePipeFormat(format);
    }

    static year(year: number): CvDate {
        const date: Date = DateUtils.fromYear(year);
        return new CvDate(date, date, 'year');
    }

    static yearRange(beginYear: number, endYear: number): CvDate {
        return new CvDate(DateUtils.fromYear(beginYear), DateUtils.fromYear(endYear), 'year');
    }

    static monthRange(beginDate: Date, endDate: Date): CvDate {
        return new CvDate(beginDate, endDate, 'month');
    }

    initDatePipeFormat(format: 'month' | 'year'): 'MMMM yyyy' | 'yyyy' {
        // If not defined --> default to year format
        if (!format) {
            return this.initDatePipeFormat('year');
        }
        switch (format) {
            case 'month':
                return 'MMMM yyyy';
            case 'year':
                return 'yyyy';
        }
    }
}
