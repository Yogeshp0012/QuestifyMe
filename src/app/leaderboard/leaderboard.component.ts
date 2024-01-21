import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit, OnDestroy {
    reward: string = "reward_1"
    rewardCount: number = 1;
    xp: string = "xp_21"
    xpCount: number = 21;
    timeInterval: any;

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
}
