import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { ResponseMsg } from '../responsemsg';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  responsemsg: ResponseMsg = <ResponseMsg>{ Success: false, Message: "Please fill the required field and Items should not be empty!" };
  submitted = false;
  isFail = false;
  clientData: any;
  constructor(private apiservice: ApiService,
    private cookieservice: CookieService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.LoginForm = this.formBuilder.group({
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }
  get uname() {
    return this.LoginForm.get('UserName');
  }
  get pword() {
    return this.LoginForm.get('Password');
  }
  ngOnInit(): void {
  }
  onLogin() {
    if (this.LoginForm.valid) {
      this.submitted = true;
      this.clientData = this.LoginForm.value;
      alert('Hit');
      this.apiservice.Login(this.clientData).subscribe(result => {
        this.responsemsg = result;
        if (this.responsemsg.Success) {
          const dateNow = new Date();
          dateNow.setDate(dateNow.getDate() + 7);
          this.cookieservice.set('Id', this.responsemsg.Id.toString(), dateNow);
          this.cookieservice.set('User', this.responsemsg.Complementary, dateNow);
          this.isFail = false;
          this.router.navigate(['/home']);
        }
        else
          this.isFail = true;
      });
    }
    else {
      this.isFail = true;
      console.log(this.LoginForm.errors);
    }
  }
}
