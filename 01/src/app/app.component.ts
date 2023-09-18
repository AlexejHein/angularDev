import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01';
  name = 'Alexej';
  imgURL = 'https://angular.io/assets/images/logos/angular/angular.png';

  getName(){
    return this.name;
  }
  changeImagr(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value;
  }
}
