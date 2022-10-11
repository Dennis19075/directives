import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Sign Up';
  message: String = "";
  registered: Boolean = false;
  name: String = "";
  lastname: String = "";

  registerUser(){
    this.registered = true;
    this.message = `User: ${this.name+" "+this.lastname} registered successfully!`
  }
}
