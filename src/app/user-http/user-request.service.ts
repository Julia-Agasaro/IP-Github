import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../user-class/user';
import {Repository} from '../repository';
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user: User;
  myrepo: Repository[]
  constructor(private http:HttpClient) { 
    this.user = new User("","",0,0,"",0);
    this.myrepo = [];
  }
  userRequest(userName){
    interface ApiResponse{
      login:string;
      avatar_url:string;
      followers:number;
      following:number;
      location:string;
      public_repos:number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+userName+"?access_token="+environment.apiUrl).toPromise().then(response=>{
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.location = response.location
        this.user.public_repos = response.public_repos
        // console.log(this.user);
        resolve()
      },
      error=>{
        this.user.login = "Please Reload The Page"
        

        reject(error)
      })
    })
    return promise
  }
  userRepoRequest(userName){
interface ApiResponse{
  name: string;
  description:string;
}
let promise = new Promise((resolve,reject)=>{
  this.http .get<ApiResponse>( "https://api.github.com/users/"+ userName +"/repos?acess_token="+  environment.apiUrl).toPromise().then(response => {
      for (var j in response){
        this.myrepo.push(response[j]);
      }
      console.log(this.myrepo);
      resolve();
    },
    error => {
      this.user.login = "Please Reload the page";
      reject(error);
    })
  });
  return promise;
  }
}
