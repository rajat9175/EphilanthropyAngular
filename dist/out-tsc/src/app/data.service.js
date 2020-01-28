import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    validateUser(userDetails) {
        console.log("Inside DATA Service");
        return this.http.post("http://localhost:8080/Project1/user/login", userDetails);
    }
    listFoundation() {
        return this.http.get("http://localhost:8080/Project1/admin/listfoundations");
    }
    listDoner() {
        return this.http.get("http://localhost:8080/Project1/organisation/listdoners");
    }
    organisationInfo() {
        return this.http.get("http://localhost:8080/Project1/admin/getorganisationbyid/" + (JSON.parse(window.sessionStorage.getItem('userDetails')).userId));
    }
    editProfile(userDetails) {
        return this.http.post("http://localhost:8080/Project1/user/editprofile", userDetails);
    }
    getUserById(id) {
        return this.http.get("http://localhost:8080/Project1/user/getuserbyid/" + id);
    }
    manageFoundation(orgId) {
        return this.http.delete("http://localhost:8080/Project1/admin/deleteprofile/" + orgId);
    }
    donate(donateDetails) {
        return this.http.post("http://localhost:8080/Project1/doner/donate", donateDetails);
    }
    getOrg(orgId) {
        return this.http.get("http://localhost:8080/Project1/admin/getorg/" + orgId);
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map