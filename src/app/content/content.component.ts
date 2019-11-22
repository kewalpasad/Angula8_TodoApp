import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  TaskList: [
    {
      task: "Complete the service";
      complete: false;
    },
    {
      task: "Search for good meetup";
      complete: true;
    },
    {
      task: "Decide the location";
      complete: false;
    },
    {
      task: "confirm the cater";
      complete: true;
    }
  ];
}
