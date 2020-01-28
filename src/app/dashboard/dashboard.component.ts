import { Component, OnInit } from '@angular/core';
import { DataService } from '../service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataService]
})

export class DashboardComponent implements OnInit {
  panelOpenState = false;
  searchText: string;
  dataListVO:any


  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getData()
  }


getData = () =>{
  this.dataService.getData().subscribe( (data)=>{
    this.dataListVO = data;
    console.log(this.dataListVO)
  } )
}

}

