import { Component, OnInit } from "@angular/core";
import { ExperiencesHttpService } from "../../services/http/experiences-http.service";
import { ExperiencesController } from "./experiences-controller";
import { ExperiencesMessages } from "./experiences-messages";
import { ExperiencesModel } from "./experiences-model";

@Component({
  selector: "cv-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"],
})
export class ExperiencesComponent implements OnInit {
  /**
   * Model of the component
   */
  readonly model: ExperiencesModel = new ExperiencesModel();

  /**
   * Messages of the component
   */
  readonly messages: ExperiencesMessages = new ExperiencesMessages();

  /**
   * Controller of the component
   */
  readonly controller: ExperiencesController = new ExperiencesController(
    this.model,
    this.experiencesHttpService
  );

  /**
   * Constructor
   *
   * @param experiencesHttpService HTTP service for experiences
   */
  constructor(
    private readonly experiencesHttpService: ExperiencesHttpService
  ) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    this.controller.init();
  }
}
