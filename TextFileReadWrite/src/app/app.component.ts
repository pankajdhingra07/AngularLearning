import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title : string = 'Submit Info Page';
  userInfo = {
    FirstName : 'Pankaj',
    MiddleName : 'Kumar',
    LastName : 'Dhingra',
    JobProfile: 'SSE',
    JobTenure : 4,
    JobAddress: 'Gurgaon',
    ApartmentName: 'Surya Kiran',
    FloorNo: 3,
    ApartmentAddress: 'Old Delhi Road'
  }
  constructor(){}


  onSubmit(f){
    console.log(f.value);
  }

}
