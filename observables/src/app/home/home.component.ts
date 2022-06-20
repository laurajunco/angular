import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";

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

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      //the observer is interested in hearing about changes in data
      setInterval(() => {
        //emit a new value
        observer.next(count);

        //completes the observable. It stops. 
        if (count === 2) {
          observer.complete();
        }

        //after throwing an error the observable dies. It doesn't complete
        if (count > 3) {
          observer.error(new Error("count is greter than 3"));
        }
        count++;
      }, 1000);
    });

    // first argument gets called when receiving and event
    // second argument is the function that gets called if there is an error
    // third argument is called when observable completes
    this.firstObsSubscription = customIntervalObservable.subscribe(
      (data) => console.log(data),
      (error) => alert(error.message),
      () => console.log("Completed!")
    );
  }

  ngOnDestroy() {
    // when we leave the component the subscription is cleared
    this.firstObsSubscription.unsubscribe();
  }
}
