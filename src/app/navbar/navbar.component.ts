import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy{

    @Input()
    active: String = "";

    health: Number = 0;
    xp: Number = 0;
    rewards: Number = 0;
    timeInterval: any;
    death: string = "death1"
    deathCount: number = 1;

    private questService = inject(UserService);

    ngOnInit(): void {
        this.questService.getUserDetails().subscribe((data) => {
            this.health = data.health;
            this.xp = data.xp;
            this.rewards = data.rewards
        });
        this.timeInterval = setInterval(() => {
            if(this.deathCount < 10){
                this.death = "death" + (++this.deathCount);
            }
            else{
                this.death = "death" + (this.deathCount = 1);
            }
        }, 200)
    }

    ngOnDestroy(): void {
        if(this.timeInterval){
            clearInterval(this.timeInterval);
        }
    }

    toggleDeathModal(){
        document.getElementById("death-modal")?.classList.toggle("hidden");
    }

}
