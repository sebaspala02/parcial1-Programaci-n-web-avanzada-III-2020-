import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  titleChart= "Cant. People for Citys in year, 2014";
  myData=[
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 24400000],
  ];
  type='PieChart';
}
