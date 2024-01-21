import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShopService } from '../shop.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shop',
    standalone: true,
    imports: [NavbarComponent, CommonModule],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit, OnDestroy {
    private shopService = inject(ShopService);
    shopItems: any;
    currentUser: String = "mrgeraffe";
    reward: string = "reward_1"
    rewardCount: number = 1;
    timeInterval: any;

    ngOnInit(): void {
        this.timeInterval = setInterval(() => {
            if (this.rewardCount < 10) {
                this.reward = "reward_" + (++this.rewardCount);
            }
            else {
                this.reward = "reward_" + (this.rewardCount = 1);
            }
        }, 200)
        this.shopService.getAllShopItems().subscribe((data) => {
            this.shopItems = data;
            console.log(this.shopItems);
            for (let i = 0; i < this.shopItems.length; i++) {
                this.shopItems[i].purchased = this.completionStatus(this.shopItems[i].purchased_by);
            }
            console.log(this.shopItems);
        }, (err) => { console.log(err) })
    }

    completionStatus(data: any) {
        if (data.includes(this.currentUser)) {
            return true;
        }
        return false;
    }

    ngOnDestroy(): void {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    }
}
