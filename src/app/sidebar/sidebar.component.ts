import { Component,  OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() conversationClicked: EventEmitter<any> = new EventEmitter()
  searchText!: string; 

conversations = [
  {
    name: "Ozzy Osbourne",
    date: "Aug 1, 2022",
    message: "I am fine!",
    src:"../../assets/ozzy-osbourne.png",
    messageRead: true,
    messages: [
      {id:1, body: "Hello Bro! ", date: '8/1/22, 4:30 AM', me: false},
      {id:2, body: "Hi Ozzy, how are you?", date:  '8/1/22, 5:30 AM', me: true},
      {id:3, body: "I am fine!", date:  '8/1/22, 6:30 AM', me: false}
    ]
},
  {
    name: "James Hetfield",
    date: "Aug 2, 2017", 
    message:"Cool :)", 
    src:"../../assets/james-hetfield.png",
    messageRead: true,
    messages: [
      {id:1, body: "do you like rock and roll?", date: "4/22/17, 4:00 AM", me: false},
      {id:2, body: " Yeaaaah!", date: "4/22/17, 4:30 AM", me: true},
      {id:3, body: "Cool :)", date: "8/2/17, 5:00 AM", me: false}
  ]
},
  {
    name: "Till Lindemann", 
    date: "Aug 3, 2022", 
    message:"Let's play in my band together!!", 
    src:"../../assets/till-lindeman.png",
    messageRead: true,
    messages: [
      {id:1, body: "Who are you?", date: "5/2/22, 4:00 AM", me: false},
      {id:2, body: "I am your fun", date: "5/3/22, 4:30 AM", me: true},
      {id:3, body: "Let's play in my band together!! ", date: "8/3/22, 5:00 AM", me: false}
  ]
},
  {
    name: "Marilyn Manson", 
    date: "Aug 4, 2022", 
    message:"Are you okay??", 
    src:"../../assets/marilyn-manson.png", 
    messageRead: true,
    messages: [
      {id:1, body: "Where are you, dude?", date: "8/4/22, 4:00 AM", me: true},
      {id:2, body: "I'm in church now", date: "8/4/22, 4:30 AM", me: false},
      {id:3, body: "Are you okay??", date: "8/4/22, 5:00 AM", me: true}
  ]
},
   {name: "Johnny Cash", date: "Aug 5, 2022", message:"", src:"../../assets/johny-cash.png"},

]

ansvers: any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  get searchConversation() {
    return this.conversations.filter(conversation => {
      return conversation.name.toLowerCase().includes(this.searchText)
})
  }
}
