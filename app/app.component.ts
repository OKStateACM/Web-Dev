import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'acm-test-app';
  public messages = ["Hello", "Yo", "Goodbye", "Bye"];
  public message: string;
  constructor(private webSocketService: SocketService) {}

  ngOnInit() {

    this.webSocketService.listen('message').subscribe((data) => {
      console.log(data);
    })
  }

}

