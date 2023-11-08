import { Component } from '@angular/core';
import { SportsService } from './sports.service';

@Component({
  selector: 'app-baseball',
  template: ` <div>
    <h3>Baseball Teams</h3>
    <ul>
      <li *ngFor="let team of baseballTeams">{{ team }}</li>
    </ul>
  </div>`,
})
export class BaseballComponent {
  baseballTeams: string[];
  constructor(private sportsService: SportsService) {
    this.baseballTeams = sportsService.getSport()['baseball'];
  }
}
