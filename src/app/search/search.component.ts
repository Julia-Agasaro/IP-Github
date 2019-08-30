import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { UserRequestService } from '../user-http/user-request.service';
import { environment } from '../../environments/environment';
import { Repository } from '../repository'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
users:User;
userName: string = "" ;
response: any;
Repository: Repository[];

  constructor(private http: HttpClient,private name:UserRequestService) { }
  


    ngOnInit() {
  
  }
  
  funcsearch(){
  this.name.userRequest(this.userName);
  this.users=this.name.user;
  
  this.name.userRepoRequest(this.userName);
  this.Repository=this.name.myrepo
  console.log(this.users);
}
}