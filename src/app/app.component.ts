import { ApiServiceService } from './services/api-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any = []
  constructor(private apiService: ApiServiceService) {

  }

  getUsers() {
    this.apiService.getData().subscribe(data => {
      console.log(data)
      this.users = data
    })
  }

}
