import { Injectable } from '@angular/core';
import { Bus } from '../model/Bus';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerConf ={
  headers :{'Content-type':'application.json'}
}

@Injectable({
  providedIn: 'root'
})

export class BusService {
  busList : Bus[]; 

  uri ='http://localhost:3000/BusSchedule';

  constructor(private http :HttpClient) { 
    // this.http.get<Bus[]>(this.uri).subscribe(data=>this.busList=data);
  }

  getBusListByHttp() :Observable<Bus[]>{
    return this.http.get<Bus[]>(this.uri);
  }
  
}
