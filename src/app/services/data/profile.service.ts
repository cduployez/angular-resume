import {Injectable} from '@angular/core';
import {DateUtils} from '../../utils/date-utils';

@Injectable({providedIn: 'root'})
export class ProfileService {

    readonly firstName: string = 'Clément';

    readonly lastName: string = 'DUPLOYEZ';

    readonly fullName: string = `${this.firstName} ${this.lastName}`;

    readonly email: string = 'c.duployez+github@gmail.com';

    readonly age: number = DateUtils.toAge(DateUtils.fromDate(5, 7, 1994));

    readonly ageWithSuffix: string = `${this.age} ans`;

    readonly city: string = 'Lillois';

    readonly driverLicense: string = 'Permis B (Véhicule)';

    readonly goals: string[] = [
        'Développement logiciel en équipe',
        'Evolution souhaitée vers l\'expertise technique'
    ];

}
