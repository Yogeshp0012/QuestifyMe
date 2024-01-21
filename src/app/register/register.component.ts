import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SloganComponent } from '../slogan/slogan.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, SloganComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    loading: boolean = false;

    constructor(private router: Router){}

    user = {
        username: "",
        email: "",
        password: ""
    }

    registerUser(){
        this.loading = true;
        setTimeout(() => {
            console.log(this.user);
            this.router.navigate(['/select-character']);
        }, 2000);
    }

}
