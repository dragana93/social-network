import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(  private accountService: AccountService) {}

  ngOnInit(): void {}

  register(){
    console.log(this.model );
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error =>{
      console.log(error);
    })
  }

  cancel(){
    console.log("canceled");
    this.cancelRegister.emit(false);
  }
}
