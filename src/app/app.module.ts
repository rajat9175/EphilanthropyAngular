import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurfocusareaComponent } from './ourfocusarea/ourfocusarea.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import{ NgModel,NgForm, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { RegisterComponent } from './register/register.component';
import { OrganisationrequestComponent } from './organisationrequest/organisationrequest.component';
import { ListdonerComponent } from './listdoner/listdoner.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ManagefoundationComponent } from './managefoundation/managefoundation.component';
import { EditComponent } from './edit/edit.component';
import { listfoundationComponent } from './listfoundation/listfoundation.component';
import { SearchComponent } from './search/search.component';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
import { PaymentComponent } from './payment/payment.component';
import { DataService } from './data.service';
import { AuthService } from './auth.service';




// const parentModuleRoutes: Routes = [
//   {
//     path:'',component:HomeComponent,
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'changePassword',component:ChangePasswordComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'subjectwise',component:SubjectwisereportComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'bookwise',component:BookwiseReportComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'owner',component:OwnerComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'edit',component:EditProfileComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'feesorfine',component:FeesorfinereportComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'register',component:RegisterComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'checkBookavailability',component:CheckbookavailableComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'newbook',component:AddnewBookComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'newcopy',component:AddnewCopyComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'returnbook',component:ReturnBookcopyComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'issueBook',component:IssueBookcopyComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{ path: 'issuedbooks', component: ListofBooksComponent }]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{ path: 'addmember', component: AddnewmemberComponent }]
//   },
//   {
//     path:'home',component:HomeComponent,children:[ { path: 'payment', component: TakepaymentComponent }]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{ path: 'paymenthistoty', component: PaymentHistoryComponent }]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{ path :'userpaymenthistoty',component:UserpaymentHistoryComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'listofissuedBook',component:UserlistofissuedbooksComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'listofuser',component:ListofuserComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'help',component:HelpComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'search',component:SearchComponent}]
//   }
// ];








@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    OurfocusareaComponent,
    LoginComponent,
    DonateComponent,
    HomeComponent,
    EducationComponent,
    HealthcareComponent,
    RegisterComponent,
    OrganisationrequestComponent,
    ListdonerComponent,
    HomeuserComponent,
    ManagefoundationComponent,
    EditComponent,
    listfoundationComponent,
    SearchComponent,
    AccountinfoComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  //  RouterModule.forRoot(parentModuleRoutes)
    RouterModule.forRoot([
      { path: "", component: HomeComponent},
      { path: "home", component: HomeComponent},
      { path: "listdoner", component: ListdonerComponent},
      { path: "homeuser/search", component:SearchComponent},
      { path: "homeuser/listdoner", component:ListdonerComponent},
      { path: "homeuser/accountinfo", component:AccountinfoComponent},
      { path: "homeuser/edit", component:EditComponent},
      { path: "homeuser/listfoundation", component:listfoundationComponent},
      { path: "homeuser/accountinfo", component:AccountinfoComponent},
      { path: "homeuser/ourfocusarea", component:OurfocusareaComponent},
      { path: "homeuser/managefoundation", component: ManagefoundationComponent},
      { path: "homeuser", component: HomeuserComponent},
      { path: "aboutus", component: AboutusComponent},
      { path: "payment", component: PaymentComponent},
      { path: "donate", component: DonateComponent},
      { path: "login", component: LoginComponent},
      { path: "register", component: RegisterComponent},
      { path: "ourfocusarea", component: OurfocusareaComponent},
      { path: "education", component: EducationComponent},
      { path: "healthcare", component: HealthcareComponent},
      { path: "organisationrequest", component: OrganisationrequestComponent}
    
    ])

],
exports:[RouterModule],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
