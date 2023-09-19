import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01';
  name = 'alexej';
  imgURL = 'https://angular.io/assets/images/logos/angular/angular.png';
  images = [
    'https://angular.io/assets/images/logos/angular/angular.png',
    'https://angular.io/assets/images/logos/angular/angular_solidBlack.png',
    ];
  isDisabled = false;
  currentDate = new Date();
  cost = 2000;
  temperature = 20.2;
  pizza = {
    title: 'Carbonara',
    description: 'Classic Italian pizza',
    isVegetarian: false,
    ingredients: ['Cheese', 'Tomato', 'Bacon']
  };

  blueClass = false;
  fontSize = 16;



  getName(){
    return this.name;
  }
  changeImagr(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  logImg(event: string){
    console.log(event);
  }

  
  hallo(){
    setTimeout(() => {
    this.name = 'bob';}, 2000);
    setTimeout(() => {
      this.name = 'Alexej';}, 4000);
  }
}
