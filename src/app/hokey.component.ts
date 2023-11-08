import { Component } from '@angular/core';
import { SportsService } from './sports.service';

@Component({
  selector: 'app-hokey',
  template: `
    <div>
      <h3>Hockey Teams</h3>
      <ul>
        <li *ngFor="let team of hokeyTeams">{{ team }}</li>
      </ul>
    </div>
  `,
})
export class HokeyComponent {
  hokeyTeams: string[];

  constructor(private sportsService: SportsService) {
    this.hokeyTeams = sportsService.getSport()['hokey'];
  }
}
