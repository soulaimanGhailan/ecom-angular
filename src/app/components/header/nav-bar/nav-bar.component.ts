import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
   constructor(private router : Router) {
   }

  onHome() {
    this.router.navigateByUrl("/home")
  }
  onProducts(){
     this.router.navigateByUrl("/products")
  }
  onAddProduct(){
     this.router.navigateByUrl("/addProduct")
  }
}
