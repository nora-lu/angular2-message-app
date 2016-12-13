import { Message } from './message.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    // needs Injectable decorator and import HttpModule in app.module
    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})  // sets up observable object holding request
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}