import { Component, OnInit } from '@angular/core';
import { HobbiesHttpService } from '../../services/http/hobbies-http.service';
import { HobbiesModel } from './hobbies-model';
import { HobbiesController } from './hobbies-controller';
import { HobbiesMessages } from './hobbies-messages';

@Component({
  selector: 'cv-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  /**
   * Messages of the component
   */
  readonly messages: HobbiesMessages = new HobbiesMessages();

  /**
   * Model of the component
   */
  readonly model: HobbiesModel = new HobbiesModel();

  /**
   * Controller of the component
   */
  readonly controller: HobbiesController = new HobbiesController(
    this.model,
    this.hobbiesHttpService
  );

  /**
   * Constructor
   *
   * @param hobbiesHttpService HTTP service for projects
   */
  constructor(private readonly hobbiesHttpService: HobbiesHttpService) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }
}
