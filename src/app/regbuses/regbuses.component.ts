import { Component } from '@angular/core';
import { regService } from '../reg.service';

@Component({
  selector: 'app-regbuses',
  templateUrl: './regbuses.component.html',
  styleUrls: ['./regbuses.component.css']
})
export class regbusesComponent {
  User:any;

  constructor(private regService: regService) { }

  ngOnInit() {

    this.regService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.User= data;
    }) 

}
}