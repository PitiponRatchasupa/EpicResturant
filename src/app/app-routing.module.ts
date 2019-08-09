import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DrinkComponent } from "./drink/drink.component";
import { MainComponent } from "./main/main.component";
import { SweetComponent } from "./sweet/sweet.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "drink",
    component: DrinkComponent
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "sweet",
    component: SweetComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
