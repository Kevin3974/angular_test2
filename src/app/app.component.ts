import { Component } from '@angular/core';
import {  FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from './dataservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected formgroup!: FormGroup;
  title = 'test2';
  proData: any;
  tabledata: any;
  colour: any;


  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.getProgram()
      .subscribe((res: any) => {
        this.proData = res.programs;
        //console.log(this.select);
      });


  }


  changes(e: any) {
    console.log(e.value);
    this.data.gettabledata(e.value).subscribe((data: any) => {
      this.tabledata = data.project;
      console.log(this.tabledata)
      for (let i = 0; i < this.tabledata.length; i++) {
        this.colour = this.tabledata[i].color;
        console.log(this.colour);
      }
    })
  }
}
