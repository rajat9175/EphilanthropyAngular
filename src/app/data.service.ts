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

    return this.http.post("http://localhost:8080/Project1/user/login",userDetails);
  }
  listFoundation()
  {
    return this.http.get("http://localhost:8080/Project1/admin/listfoundations");
  }
  listDoner()
  {
    return this.http.get("http://localhost:8080/Project1/organisation/listdoners");
  }
  organisationInfo()
  {
    return this.http.get("http://localhost:8080/Project1/admin/getorganisationbyid/"+(JSON.parse(window.sessionStorage.getItem('userDetails')).userId));
  }
  editProfile(userDetails)
  {
    return this.http.post("http://localhost:8080/Project1/user/editprofile",userDetails);
  }
  getUserById(id)
  {
    return this.http.get("http://localhost:8080/Project1/user/getuserbyid/"+id);
  }
  manageFoundation(orgId)
  {
    return this.http.delete("http://localhost:8080/Project1/admin/deleteprofile/"+orgId);
  }
  // donate(donate)
  // {
  //   console.log("inside donate"+donate.donationAmount+" xx "+donate.orgId+" xxx "+donate.donerId);
  //   return this.http.post("http://localhost:8080/Project1/doner/donate/"+donate.donationAmount,donate.donerId,donate.orgId);
  // }
  donate(donate)
  {
    console.log("inside donate"+donate.donationAmount+"  DonationAmount  "+donate.orgId+"  OrganisationId   "+donate.donerId+"  DonerId");
    return this.http.post("http://localhost:8080/Project1/doner/donate",donate);
  }
  getOrg(orgId)
  {
    return this.http.get("http://localhost:8080/Project1/admin/getorg/"+orgId);
  }
}
