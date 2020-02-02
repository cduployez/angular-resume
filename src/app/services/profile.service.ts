import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProfileService {

    readonly firstName: string = 'Clément';

    readonly lastName: string = 'DUPLOYEZ';

    readonly fullName: string = `${this.firstName} ${this.lastName}`;

}
