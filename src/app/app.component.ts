import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';

  // name = "Vivek Shivkumar Gupta";

  // disabledBox = true;

  // show = false;

  // color = "yellow";

  

  // data = {
  //   name: "Vivek",
  //   age : 23
  // }

  // parentComponent(data:any){
  //   console.warn(data);
  // }

  // enableBox(){
  //   this.disabledBox = false;
  // }

  // getUserValue(value:any){
  //   console.warn(value);
  // }

  data:any = [];
  constructor(private user: UsersDataService){
    
    this.user.getData().subscribe(data =>{
      console.warn(data);
      this.data = data;
    })
  }


}
