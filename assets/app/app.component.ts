import { Component } from '@angular/core';
import { MessageService } from "./messages/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]  // create one instance for AppComponent and its child components
})
export class AppComponent {

}