import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Message } from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    // styles are only applied to this component scope
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }     
    `]
})

export class MessageComponent {
    @Input() message: Message;  // @Input('alias') allows passing data from parent to child
    @Output() editClicked = new EventEmitter<string>();  // @Output() allows passing data from child to parent and makes the event to be listened from outside

    onEdit() {
        this.editClicked.emit('A new value');
    }
}