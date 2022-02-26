import { Component,OnInit } from '@angular/core';
import { TabledataService } from '../service/Tabledata.service';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.css']
})
export class CustomertableComponent implements OnInit {
  tData: any
  tableRowData:any

  constructor(private sdata: TabledataService) { }
  ngOnInit(): void {
    this.tData = this.sdata.getdata()
  }

  passData(index: any) {
    let data=this.tData[index]
    let array=[data.CompanyName,data.CompanyDes,data.CompanyStartYear,data.CompanyGst,data.State,data.Country]
    this.tableRowData=array
  } 
}
