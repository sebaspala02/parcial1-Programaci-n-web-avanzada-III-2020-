import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Grafico de torta
  title = 'my-app';
  titleChart = "Cant. People for Citys in year, 2014";
  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 24400000]
  ];
  type = 'PieChart';

  // Grafico de mapamundi
  titleGeo = 'my-app';
  titleChartGeo = "Cant. People for Citys in year, 2014";
  myDataGeo = [
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ];
  typeGeo = 'GeoChart';

  // Grafico de bar
  titleBar = 'my-app';
  titleChartBar = "Cant. People for Citys in year, 2014";
  myDataBar = [
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ];
  typeBar = 'BarChart';

  // Grafico de Area
  titleLine = 'my-app';
  titleChartLine = "Cant. People for Citys in year, 2014";
  myDataLine = [
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ];
  typeLine = 'AreaChart';

  // Grafico de dona
  titleDonut = 'my-app';
  titleChartDonut = "Cant. People for Citys in year, 2014";
  myDataDonut = [
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ];
  typeDonut = 'SteppedAreaChart';
}
