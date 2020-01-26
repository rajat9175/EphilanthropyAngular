import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  validateUser(userDetails)
  {
    console.log("Inside DATA Service")

    return this.http.post("http://localhost:8080/Project1/users/login",userDetails);
  }
  listFoundation()
  {
    return this.http.get("http://localhost:8080/Project1/users/listfoundations");
  }
  listDoner()
  {
    return this.http.get("http://localhost:8080/Project1/organisation/listDoner");
  }
  organisationInfo()
  {
    return this.http.get("http://localhost:8080/Project1/organisation/"+(JSON.parse(window.sessionStorage.getItem('userDetails')).userId));
  }
  editProfile(userDetails)
  {
    return this.http.post("http://localhost:8080/Project1/users",userDetails.userId);
  }
  getUserById(id)
  {
    return this.http.get("http://localhost:8080/Project1/users/getuserbyid/"+id);
  }
  getOrganisationById(id)
  {
    return this.http.get("http://localhost:8080/Project1/users/"+id);
  }
  
  manageFoundation(orgId)
  {
    return this.http.get("http://localhost:8080/Project1/users/"+orgId);
  }
}
