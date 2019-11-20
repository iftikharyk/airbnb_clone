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
  openHelpDialog: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  openLogin() {
    this.openLoginModal = true;

    if (this.openSignupModal = true) {
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
  }

  closeSignup() {
    this.openSignupModal = false;
  }

  openSignupForm() {
    this.openSignupFormModal = true;

    if (this.openSignupModal = true) {
      this.openSignupModal = false;
    }
  }

  closeSignupForm() {
    this.openSignupFormModal = false;
  }

  openHelp() {
    this.openHelpDialog = true;
  }

  closeHelp() {
    this.openHelpDialog = false;
  }

}
