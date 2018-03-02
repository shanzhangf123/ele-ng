import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../base/service/api.service';
import { BiResponseModel } from '../../base/model/bi-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor( @Inject(ApiService) public api: ApiService) {
  }



  ngOnInit(): void {

  }



  // constructor(
  //   @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  // ) {
  // }

  submit(): void {
    console.log('提交登录请求');
    this.api.basePost('userLoginCheck', {
      username: '999999@qq.com',
      password: '987654321',
      platform: 1
    }).subscribe((res: BiResponseModel) => {
      console.log("登录反馈", res)

      // this.hideProcess = true;
      // if (res.status === APIErrorCode.SUCCESS) {
      //   this.userService.applyLogin({ user: res.data.user, companies_information: res.data.companies_information, session_id: res.data.session_id });
      //   this.router.navigate(['dashboard', {outlets: {chat: null}}]);
      // } else {
      //   console.log(res.message);
      // }
    });
  }

  reset(): void {


  }

  // ctrl(item: string): AbstractControl {
  //   return this.validateForm.controls[item]
  // }

  // statusCtrl(item: string): string {
  //   if (!this.validateForm.controls[item]) return
  //   const control: AbstractControl = this.validateForm.controls[item]
  //   return control.dirty && control.hasError('status') ? control.errors.status : ''
  // }

  // messageCtrl(item: string): string {
  //   if (!this.validateForm.controls[item]) return
  //   const control: AbstractControl = this.validateForm.controls[item]
  //   return control.dirty && control.hasError('message') ? control.errors.message : ''
  // }

  // ngOnInit(): void {
  //   console.log('页面初始化了');
  //   this.validateForm = this.formBuilder.group({
  //     password: [ '', [this.passwordValidator] ],
  //     mail: [ '', [this.emailValidator] ],
  //   })
  // }

  // private emailValidator = (control: FormControl): validateResult => {
  //   const mailReg: RegExp = /^[A-Za-z0-9一-龥]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  //   if (!mailReg.test(control.value)) {
  //     return { status: 'error', message: '邮箱格式不正确' }
  //   }
  //   return { status: 'success' }
  // }

  // private passwordValidator = (control: FormControl): validateResult => {
  //   if (!control.value) {
  //     return { status: 'error', message: '密码是必填的' }
  //   }
  //   if (control.value.length < 6) {
  //     return { status: 'error', message: '密码长度必须大于 6 位' }
  //   }
  //   return { status: 'success' }
  // }



}
