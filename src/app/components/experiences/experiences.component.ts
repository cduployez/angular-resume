import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ExperienceItem } from "../../model/experience/experience-item";
import { ExperienceFactory } from "../../server/experience.factory";
import { ExperiencesHttpService } from "../../services/http/experiences-http.service";

@Component({
  selector: "cv-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"],
})
export class ExperiencesComponent implements OnInit {
  experienceItems: ExperienceItem[] = ExperienceFactory.getAll();

  experienceItems$: Observable<ExperienceItem[]> | null = null;

  constructor(
    private readonly experiencesHttpService: ExperiencesHttpService
  ) {}

  ngOnInit(): void {
    this.experienceItems$ = this.experiencesHttpService.findAll();
    this.experienceItems$.subscribe((items) => {
      console.log(items);
    });
  }
}
