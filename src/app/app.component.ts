import { Component } from '@angular/core';
import { AppConfigs } from '../app/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = AppConfigs.SERVER_CONFIG.USE_URL;
  
}
