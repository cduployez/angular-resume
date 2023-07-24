import { Component, OnInit } from '@angular/core';
import { LanguagesModel } from './languages-model';
import { LanguagesController } from './languages-controller';
import { LanguagesHttpService } from '../../services/http/languages-http.service';

@Component({
  selector: 'cv-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  /**
   * Model of the component
   */
  readonly model: LanguagesModel = new LanguagesModel();

  /**
   * Controller of the component
   */
  readonly controller: LanguagesController = new LanguagesController(
    this.model,
    this.languagesHttpService
  );

  /**
   * Constructor
   *
   * @param languagesHttpService HTTP service for languages
   */
  constructor(private readonly languagesHttpService: LanguagesHttpService) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }
}
