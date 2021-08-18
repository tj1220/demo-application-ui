import { Component } from '@angular/core';
import { AppResponsiveService } from './services/app-responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "(window:resize)": "onWindowResize($event)"
  }
})
export class AppComponent {
  constructor(private appResponsiveService: AppResponsiveService) {}
  ngOnInit() {
    this.appResponsiveService.setWidth(window.innerWidth);
  }
  onWindowResize = (event: any): void => {
    this.appResponsiveService.setWidth(event.target.innerWidth);
  };
}
