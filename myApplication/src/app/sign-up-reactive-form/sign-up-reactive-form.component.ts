import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
})
export class SignUpReactiveFormComponent {
  signUpForm!: FormGroup;
  show: boolean = false;
  showPassword: boolean = false;

  show1: boolean = false;
  showPassword1: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLoad()
  }

  formLoad() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobile: [, [Validators.maxLength(10)]],
      pancard: ['', [Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'), Validators.maxLength(10)]],
      email: [''],
      password: [''],
      confirmPassword: [''],
      city : ["",[this.spacesNotAllowed]]
    })

  }


  spacesNotAllowed(control : any){
    const value = control.value;
    let isIncludesSpace =/\s{2,}/.test(value)
    return isIncludesSpace ? {spacesNotAllowed : true} : null;
    
    //val
  }

  submit() {
    console.log(this.signUpForm.value);

  }

  toShowPassword() {
    // this.showPassword = true;
    // this.show=true;
    this.showPassword = !this.showPassword;
    this.show = !this.show;
  }

  toShowPassword1() {
    // this.showPassword = true;
    // this.show=true;
    this.showPassword1 = !this.showPassword1;
    this.show1 = !this.show1;
  }
}
