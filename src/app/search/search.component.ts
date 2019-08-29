import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { UserRequestService } from '../user-http/user-request.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:User;
  constructor( private userService:UserRequestService) { }

  ngOnInit() {
    this.userService.userRequest()
    this.user = this.userService.user
  }

}
