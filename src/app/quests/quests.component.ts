import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';
import { QuestsService } from '../quests.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-quests',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, HttpClientModule, CommonModule],
    templateUrl: './quests.component.html',
    styleUrl: './quests.component.scss'
})
export class QuestsComponent implements OnInit, OnDestroy {
    reward: string = "reward_1"
    rewardCount: number = 1;
    xp: string = "xp_21"
    xpCount: number = 21;
    timeInterval: any;
    currentUser: string = "mrgeraffe"
    activeQuest: {
        id?: any
        startDate?: any
        endDate?: any
        rewards?: any
        xp?: any
        status?: any
        completed_users?: any
        progress?: any
        bossName?: any
        name?: any
        completion_status?: any
    } = {};
    last5Quests: [{
        id?: any
        startDate?: any
        endDate?: any
        rewards?: any
        xp?: any
        status?: any
        completed_users?: any
        progress?: any
        bossName?: any
        name?: any
        completion_status?: any
    }] = [{}];
    private questService = inject(QuestsService);

    constructor() {

    }

    ngOnInit(): void {

        //TODO: UPDATE THE STATUS BASED ON TASK PROGRESS of start and end data

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
        this.last5Quests.shift();
        this.questService.getActiveQuest().subscribe((data) => {
            console.log(data);
            this.activeQuest = data[0];
            this.activeQuest.completion_status = this.completionStatus(this.activeQuest.completed_users)
        })
        this.questService.getLast5Quests().subscribe((data) => {
            for(let i = 0; i < data.length; i++){
                this.last5Quests.push(data[i]);
                this.last5Quests[i].completion_status = this.completionStatus(data[i].completed_users);
            }
        })
    }

    ngOnDestroy(): void {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    }

    completionStatus(data: any): string{
        if(data.includes(this.currentUser)){
            return "Completed";
        }
        return "Not Completed";
    }
}
