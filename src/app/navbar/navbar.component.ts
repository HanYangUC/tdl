import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router){ }

  goToList($myParam: string = ''): void {
    const navigationDetails: string[] = ['/list'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }

  goToAdd($myParam: string = ''): void {
    const navigationDetails: string[] = ['/add'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }

}
