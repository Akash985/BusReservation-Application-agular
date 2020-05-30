import { Component, OnInit } from '@angular/core';
import { BusService } from '../service/bus.service';
import { Bus } from '../model/Bus';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  buses : any;
  constructor(private busService: BusService,private http :HttpClient) {
    // this.http.get<Bus[]>('../assets/BusSchedule.json').subscribe((busData:any)=>{this.buses=busData});
    // this.busService.getBusListByHttp().subscribe((busData:Bus[])=>{this.buses=busData
    //   console.log(this.buses.length);
    // });
    // console.log(this.buses.length);
    this.busService.getBusListByHttp().subscribe((busData:Bus[])=>this.buses=busData);
   }

  ngOnInit(): void {
    // this.busService.getBusListByHttp().subscribe((busData:Bus[])=>this.buses=busData);
    
    // this.http.get<Bus[]>('http://localhost:3000/BusSchedule').subscribe((busData:any)=>{this.buses=busData});
    // console.log(typeof(this.buses));
  }



  // listBuses

}
