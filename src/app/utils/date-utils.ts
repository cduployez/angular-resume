export class DateUtils {

    static fromYear(year: number): Date {
        return new Date(year, 0, 1, 0, 0, 0, 0);
    }

}
