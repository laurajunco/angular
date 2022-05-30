import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private currentRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.currentRoute.snapshot.params["id"],
      name: this.currentRoute.snapshot.params["name"],
    };
  }
}
