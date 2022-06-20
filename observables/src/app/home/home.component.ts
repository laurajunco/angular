import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    //every secodn a new event will be emitted
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable: Observable<number> = Observable.create(
      (observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);

          if (count === 4) {
            observer.complete();
          }

          if (count > 5) {
            observer.error(new Error("count is greter than 3"));
          }
          count++;
        }, 1000);
      }
    );

    //operators
    //pipe is rxjs method
    // map applies a funciton to each value emitted, does something to it and emits the resulting value
    // we can add as many operators as we want to the pipe method and it will do them one after the other
    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => data > 0),
        map((data) => `Round ${data}`)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => alert(error.message),
        () => console.log("Completed!")
      );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
