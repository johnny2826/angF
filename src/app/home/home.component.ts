import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav!: MatDrawer;
  showFiller = true;

  ngAfterViewInit() {
    this.sidenav.open();
  }
}

