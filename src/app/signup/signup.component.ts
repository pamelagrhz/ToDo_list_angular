import { Component, OnInit } from '@angular/core';
import { getInjectionTokens } from '@angular/core/src/render3/discovery_utils';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordPreviews = {
    first: true,
    confirm: true
  }
  /* firstStatus: boolean=false;
  firstStatus2: boolean=false; */
  passText: string = 'contraseña';
  constructor(
    private alertService:AlertService
  ) { 

  }

  ngOnInit() {}
  getIcon(value: boolean): string {
    if (value) {
      return 'eye';
    }
    else {
      return 'eye-slash';
    }
  }

  signup(event: Event):void{
    event.preventDefault();
    this.alertService.show({
      title:'Alert!',
      body:'Are you sure?'
    });
  }

}


