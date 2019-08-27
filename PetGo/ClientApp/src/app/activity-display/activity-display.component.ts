import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.css']
})
export class ActivityDisplayComponent implements OnInit {
  public messagesHidden = true;
  constructor(public messageService: MessageService) { }
  displayMessages() {
    this.messagesHidden = !this.messagesHidden;
  }
  clearMessages() {
    this.messageService.clear();
  }
  updateView() {
    if ($('#users').length) {
      $('.scrollable').animate({ scrollTop: $('.scrollable')[0].scrollHeight }, 300);
    }
  }
  userAccessedData() {
    this.updateView();
  }
  ngOnInit() {
    this.messageService.addDelegate(this);
  }

}
