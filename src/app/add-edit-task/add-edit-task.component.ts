import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-task',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './add-edit-task.component.html',
  styleUrl: './add-edit-task.component.scss'
})
export class AddEditTaskComponent implements OnInit, OnDestroy {
    reward: string = "reward_1"
    rewardCount: number = 1;
    xp: string = "xp_21"
    xpCount: number = 21;
    timeInterval: any;
    loading: boolean = false;

    constructor(private router: Router){

    }

    ngOnInit(): void {
        this.timeInterval = setInterval(() => {
            if(this.rewardCount < 10){
                this.reward = "reward_" + (++this.rewardCount);
            }
            else{
                this.reward = "reward_" + (this.rewardCount = 1);
            }
            if(this.xpCount < 30){
                this.xp = "xp_" + (++this.xpCount);
            }
            else{
                this.xp = "xp_" + (this.xpCount = 21);
            }
        }, 200)
    }

    ngOnDestroy(): void {
        if(this.timeInterval){
            clearInterval(this.timeInterval);
        }
    }

    submit(){
        this.loading = true;
        setTimeout(() => {
            this.router.navigate(['/challenges']);
        }, 300);
    }
}
