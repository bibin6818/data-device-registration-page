import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
private formDataArray:any[]= [];


  setFormData(formdata:any){
  this.formDataArray.push(formdata);
  console.log(this.formDataArray,'data');
  
  }

  getFormData():any[] {
    return this.formDataArray;
  }
}

