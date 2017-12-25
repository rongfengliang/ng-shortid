import { Component } from '@angular/core';
import shortid  from "shortid";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = shortid.generate();
}
