export class DateUtils {

    static fromYear(year: number): Date {
        return new Date(year, 0, 1, 0, 0, 0, 0);
    }

    /**
     * Source : https://stackoverflow.com/a/21984136
     * @param birthday Date d'anniversaire
     */
    static toAge(birthday: Date): number {
        const dateDiff: number = Date.now() - birthday.getTime();
        const ageDate: Date = new Date(dateDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    static fromDate(day: number, month: number, year: number): Date {
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }

}
