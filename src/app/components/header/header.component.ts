import {Component} from '@angular/core';
import {ImageService} from '../../services/image.service';
import {ProfileService} from '../../services/profile.service';

@Component({
    selector: 'cv-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

    readonly goalTitle: string = 'Projet professionnel';

    readonly leftInfoList: string[];
    readonly rightInfoList: string[];

    constructor(public profileService: ProfileService,
                public imageService: ImageService) {
        this.leftInfoList = [
            this.profileService.ageWithSuffix,
            this.profileService.city
        ];

        this.rightInfoList = [
            this.profileService.driverLicense
        ];
    }

}
