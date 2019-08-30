import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { UserRequestService } from '../user-http/user-request.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // user:User;
userName: string ;
response: any;
  // constructor( private userService:UserRequestService) { }
  // userName = "";
  // githubData: any = "";
  // imgavatarUrl = "./assets/avatar.png";
  constructor(private http: HttpClient) { }
  // constructor( private userService:UserRequestService) { }
  // searchUser() {

    // this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + environment.access_token)
    //   .subscribe(
  //       (response: Response) => {
  //         const user = response.json();
  //         this.githubData = user;
          
  //         this.imgavatarUrl = user.avatar_url;
  //       }
  //     )
  // }


    ngOnInit() {
    //  
  }
  search(){
    this.http.get('https://api.github.com/users/'+ this.userName)
     .subscribe((response)=>{
       this.response = response;
       console.log(this.response);
     })
  }

}
