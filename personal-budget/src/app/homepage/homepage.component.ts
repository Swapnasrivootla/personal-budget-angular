import { AfterViewInit, Component,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource:any= {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#123456',
                '#abcdef',
                '#345678',
                '#932645',
                '#6abcde',
                '#563456',
                '#fabcde',
              ]
        }
    ],
    labels: []
};


  constructor(public http: HttpClient) {
    const el = document.getElementById('mychart');
    }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i=0;i<res.myBudget.length; i++){
          this.dataSource.datasets[0].data[i]=res.myBudget[i].budget;
          this.dataSource.labels[i]=res.myBudget[i].title;

      }
      this.createChart()
  });
  }

  createChart() {
    // var ctx = document.getElementById("mychart").getContext("2d");
    var ctx = document.getElementById("myChart") as HTMLCanvasElement;
    var myPiechart = new Chart (ctx, {
      type :'pie',
      data : this.dataSource



    });
}

}
