import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) { }

  goToList($myParam: string = ''): void {
    const navigationDetails: string[] = ['/list'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    // console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }

  goToAdd($myParam: string = ''): void {
    const navigationDetails: string[] = ['/add'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    // console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }

}
