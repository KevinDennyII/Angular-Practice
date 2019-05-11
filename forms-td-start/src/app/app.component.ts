import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestedUserName() {
    const suggestedUserName = 'Superuser';
    // passing an exact copy of the form as a javascript object
    // setValue sets you WHOLE form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedUserName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender:  'female'
    // });

    // used to only overwrite specific form javascript controls
    // patchValue sets PARTS of the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedUserName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // this is useful when needing to access the form at the time of submit or before it is submitted
  onSubmit() {
    this.submitted = true;

    // entered data
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData.secret;

    // selection
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
