import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder) {
    this.LoginForm = this.formBuilder.group({
      UserName: new FormControl('fdsf', [Validators.required]),
      Password: new FormControl('dsgs', [Validators.required])
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

}
