import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Output() toggleDrawerEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public appResponsiveService: AppResponsiveService) { }

  ngOnInit(): void {
  }

}
