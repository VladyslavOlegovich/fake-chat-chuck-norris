import { Observable } from 'rxjs';
import { HttpServiceService } from './../services/http-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
@Input() conversation: any
@Output() onSubmit: EventEmitter<any> = new EventEmitter()

message = ''
ansver: any
ansvers: any = {}
date = new Date()


  constructor(private httpService: HttpServiceService ) { }

  ngOnInit(): void {

  }
  sendMessage(event: any ) {

    this.httpService.getData().subscribe(answerObj => {
      this.ansvers = answerObj
      this.ansver = this.ansvers.value
    })
    
    let source = new Observable(observer => {
      setTimeout(() => {
        this.conversation.messages.push(
          {
            id:1,
            body:this.ansver,
            date:this.date,
            me: false
          })
          this.conversation.message = this.ansver.substr(0,36)  + '...'  
      },this.randomInteger(10000, 15000))
    })
    source.subscribe()

    let value = event.target.value.trim()
   
    event.target.value = ''
    
    if(value) {
      this.conversation.message = value
      this.conversation.messages.push(
        {
          id:1,
          body:value,
          date:this.date,
          me: true
        })
    }
  }

  sendMessageByClick(textMessage:any) {
    this.httpService.getData().subscribe(answerObj => {
      this.ansvers = answerObj
      this.ansver = this.ansvers.value
      
      let source = new Observable(observer => {
        setTimeout(() => {
          this.conversation.messages.push(
            {
              id:1,
              body:this.ansver,
              date:this.date,
              me: false
            })
            this.conversation.message = this.ansver.substr(0,36)  + '...'
          
        },this.randomInteger(10000, 15000))
      })
      source.subscribe()
      
    })
     this.message = textMessage.value
     if (this.message) {
      this.conversation.message = this.message.substr(0,36)  
      this.conversation.messages.push({
        id:1,
        body: this.message,
        date:this.date,
        me: true
      })
     }
    textMessage.value = ''
  }

   randomInteger(min: number, max: number) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  } 
}
