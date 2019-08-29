import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../user-class/user';
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user: User;
  constructor(private http:HttpClient) { 
    this.user = new User("","",0,0,"",0,0);
  }
  userRequest(){
    interface ApiResponse{
      login:string;
      avatar_url:string;
      followers:number;
      following:number;
      location:string;
      repos:number;
      public_repos:number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.location = response.location
        this.user.repos = response.repos
        resolve()
      },
      error=>{
        this.user.login = "Please Reload The Page"
        

        reject(error)
      })
    })
    return promise
  }
}

