import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  openLoginModal: boolean = false;
  openSignupModal: boolean = false;
  openSignupFormModal: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  openLogin() {
    this.openLoginModal = true;

    if (this.openSignupModal = true) {
      this.openSignupModal = false;
    }

    if (this.openSignupFormModal = true) {
      this.openSignupModal = false;
    }
  }

  closeLogin() {
    this.openLoginModal = false;
  }

  openSignup() {
    this.openSignupModal = true;

    if (this.openLoginModal = true) {
      this.openLoginModal = false;
    }

    if (this.openSignupFormModal = true) {
      this.openSignupModal = false;
    }
  }

  closeSignup() {
    this.openSignupModal = false;
  }

  openSignupForm() {
    this.openSignupFormModal = true;
  }

  closeSignupForm() {
    this.openSignupFormModal = false;
  }

}
