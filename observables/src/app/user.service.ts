import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

//instead of importing it in the app module
@Injectable({ providedIn: "root" })
export class UserService {
//   activatedEmmiter = new EventEmitter<boolean>();
activatedEmmiter = new Subject<boolean>();
}
