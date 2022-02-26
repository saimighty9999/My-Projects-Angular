import { Injectable } from '@angular/core';

 

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  constructor() { }
  data=[
    {
    CompanyName:'Company1',
    CompanyDes:'Company1 description',
            CompanyStartYear:2012,
            CompanyGst:18,
            State:'bangalore',
            Country:'India'         
  },
    {
    CompanyName:'Company2',
    CompanyDes:'Company2 description',
            CompanyStartYear:2013,
            CompanyGst:18,
            State:'Andhrapradesh',
            Country:'India'         
  },
    {
    CompanyName:'Company3',
    CompanyDes:'Company3 description',
            CompanyStartYear:2015,
            CompanyGst:18,
            State:'Telagana',
            Country:'India'         
  },
    {
    CompanyName:'Company4',
    CompanyDes:'Company4 description',
            CompanyStartYear:2015,
            CompanyGst:18,
            State:'Odisa',
            Country:'India'         
  },
    {
    CompanyName:'Company5',
    CompanyDes:'Company5 description',
            CompanyStartYear:2017,
            CompanyGst:18,
            State:'Maharasta',
            Country:'India'         
  }
]  

  getdata(){
    return this.data
  }
}
