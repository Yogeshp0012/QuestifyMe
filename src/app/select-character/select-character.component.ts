import { Component, OnInit } from '@angular/core';
import { SloganComponent } from '../slogan/slogan.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-character',
  standalone: true,
  imports: [SloganComponent, RouterModule, CommonModule],
  templateUrl: './select-character.component.html',
  styleUrl: './select-character.component.scss'
})
export class SelectCharacterComponent implements OnInit {
    rogueCount: number = 1;
    character1: String = "RogueAttack" + this.rogueCount;
    knightCount: number = 0;
    character2: String = "knightattack" + this.knightCount;
    timeInterval: any;
    ninjaSelected: boolean = false;
    knightSelected: boolean = false;
    ninjaDescSelected: boolean = false;
    knightDescSelected: boolean = false;
    knightDesc: string = "Knights, emblematic of medieval chivalry, were noble, armored warriors bound by a code of honor. Clad in distinctive metal armor, wielding swords and shields, they epitomized courage, loyalty, and duty. Knighthood, a social status earned through training and service, involved a formal dubbing ceremony. These warriors played a pivotal role in the feudal system, serving as vassals in exchange for land. Jousting, a popular sport, showcased their martial prowess. Heraldic symbols adorned their armor, representing unique identities. The romanticized image of knights endures, influencing literature, art, and gaming, where they continue to captivate audiences with tales of valor and chivalry.";
    ninjaDesc: string = "Ninjas, legendary covert operatives of ancient Japan, epitomize stealth, agility, and cunning. Masters of espionage and martial arts, they navigate the shadows with specialized skills in infiltration, sabotage, and assassination. Clad in dark attire, often with concealed weapons like shurikens and kunai, ninjas employ Ninjutsu techniques for silent movement and evasion. Operating outside conventional norms, ninjas were skilled spies and mercenaries, utilizing their expertise to serve feudal lords or pursue personal agendas. Their mystique, deeply ingrained in Japanese folklore, has transcended time, influencing global pop culture with a timeless allure that continues to captivate imaginations in various forms of media.";
    loading: boolean = false;

    constructor(private router: Router){

    }

    ngOnInit(): void {
        this.timeInterval = setInterval(() => {
            if(this.rogueCount < 7){
                this.character1 = "RogueAttack" + (++this.rogueCount);
            }
            else{
                this.character1 = "RogueAttack" + (this.rogueCount = 1);
            }
            if(this.knightCount < 4){
                this.character2 = "knightattack" + (++this.knightCount);
            }
            else{
                this.character2 = "knightattack" + (this.knightCount = 0);
            }
        }, 200)
    }

    ngOnDestroy(): void {
        if(this.timeInterval){
            clearInterval(this.timeInterval);
        }
    }

    selectNinja(){
        this.ninjaSelected = true;
        this.knightSelected = false;
    }

    selectKnight(){
        this.knightSelected = true;
        this.ninjaSelected = false;
    }

    toggleModal(){
        if(this.knightDescSelected){
        document.getElementById("knight-modal")?.classList.toggle("hidden");
        }
        else{
        document.getElementById("ninja-modal")?.classList.toggle("hidden");
        }
    }

    aboutKnight(){
        this.knightDescSelected = true;
        this.ninjaDescSelected = false;
    }

    aboutNinja(){
        this.ninjaDescSelected = true;
        this.knightDescSelected = false;
    }

    submit(){
        this.loading = true;
        setTimeout(() => {
            this.router.navigate(['/dashboard']);
        }, 2000);
    }
}
