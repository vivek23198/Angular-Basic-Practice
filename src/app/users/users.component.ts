import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() hero:any;

  @Output() parentComponent:EventEmitter<any> = new EventEmitter();


  constructor() { 
    
  }

  ngOnInit(): void {

    console.warn(this.hero);

    this.parentComponent.emit({name:"Vivek",age:23});
  }

  sendData(){
    let item = {name:"Vivek",age:23};
    this.parentComponent.emit(item);
  }

}
