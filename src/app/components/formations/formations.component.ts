import { Component, OnInit } from '@angular/core';
import { FormationsModel } from './formations-model';
import { FormationsController } from './formations-controller';
import { FormationsHttpService } from '../../services/http/formations-http.service';
import { FormationsMessages } from './formations-messages';

@Component({
  selector: 'cv-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  /**
   * Messages of the component
   */
  readonly messages: FormationsMessages = new FormationsMessages();

  /**
   * Model of the component
   */
  readonly model: FormationsModel = new FormationsModel();

  /**
   * Controller of the component
   */
  readonly controller: FormationsController = new FormationsController(
    this.model,
    this.formationsHttpService
  );

  /**
   * Constructor
   *
   * @param formationsHttpService HTTP service for formations
   */
  constructor(private readonly formationsHttpService: FormationsHttpService) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }
}
