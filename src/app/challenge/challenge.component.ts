import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import Sortable from 'sortablejs';

@Component({
    selector: 'app-challenge',
    standalone: true,
    imports: [RouterModule, NavbarComponent],
    templateUrl: './challenge.component.html',
    styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {
    reward: string = "reward_1"
    rewardCount: number = 1;
    xp: string = "xp_21"
    xpCount: number = 21;
    timeInterval: any;

    ngOnInit(): void {
        for(let i = 1; i < 5; i++){
            let kanbanColumn = document.getElementById(`kanban-list-${i}`)
            if (kanbanColumn) {
                Sortable.create(kanbanColumn, {
                    group: 'kanban',
                    animation: 100,
                    forceFallback: true,
                    dragClass: 'drag-card',
                    ghostClass: 'ghost-card',
                    easing: 'cubic-bezier(0, 0.55, 0.45, 1)'
                });
            }
        };
        this.timeInterval = setInterval(() => {
            if (this.rewardCount < 10) {
                this.reward = "reward_" + (++this.rewardCount);
            }
            else {
                this.reward = "reward_" + (this.rewardCount = 1);
            }
            if (this.xpCount < 30) {
                this.xp = "xp_" + (++this.xpCount);
            }
            else {
                this.xp = "xp_" + (this.xpCount = 21);
            }
        }, 200)
    }

    ngOnDestroy(): void {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    }
}
