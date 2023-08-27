import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './menu/food/food.component';
import { DrinksComponent } from './menu/drinks/drinks.component';
import { DessertsComponent } from './menu/desserts/desserts.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './portfolio/login/login.component';
import { SignupComponent } from './portfolio/signup/signup.component';
import { IncludeExcludeComponent } from './include-exclude/include-exclude.component';
import { DrinksPageComponent } from './components/pages/drinks-page/drinks-page.component';
import { DessertsPageComponent } from './components/pages/desserts-page/desserts-page.component';

const routes: Routes = [
  {path:'menu/food', component:FoodComponent},
  {path:'menu/drinks',component:DrinksComponent},
  {path:'menu/desserts',component:DessertsComponent},
  {path:'menu',component:MenuComponent},
  {path:'',component:HomeComponent},
   {path:'menu/food/search/:searchTerm',component:FoodComponent},
   {path:'menu/drinks/search/:searchTerm',component:DrinksComponent} ,
   {path:'menu/desserts/search/:searchTerm',component:DessertsComponent} ,
  {path:'food/:id',component:FoodPageComponent},
  {path:'drinks/:id',component:DrinksPageComponent},
  {path:'desserts/:id',component:DessertsPageComponent},
  {path:'menu/food/tag/:tag',component:FoodComponent},
  {path:'menu/drinks/tag/:tag',component:DrinksComponent},
  {path:'home',component:HomeComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'filter',component:IncludeExcludeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
