import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SelectCharacterComponent } from './select-character/select-character.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestsComponent } from './quests/quests.component';
import { ShopComponent } from './shop/shop.component';
import { CharacterSelectComponent } from './character-select/character-select.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { ClanComponent } from './clan/clan.component';

export const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "select-character", component: SelectCharacterComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "quests", component: QuestsComponent},
    {path: "challenges", component: ChallengeComponent},
    {path: "shop", component: ShopComponent},
    {path: "character-select", component: CharacterSelectComponent},
    {path: "leaderboard", component: LeaderboardComponent},
    {path: "add-task", component: AddEditTaskComponent},
    {path: "clans", component: ClanComponent},
    {path: "**", redirectTo: "/register"}
];
