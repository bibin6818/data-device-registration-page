import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  selectedGender: string ='';
  constructor(private fb:FormBuilder, private listService: ListService, private router:Router){
    this.form = this.fb.group({
      country: ['', Validators.required],
      gender:['',Validators.required],
    });

  }
  ngOnInit(): void {
   
  }

fname:string="";
dobdate:string="";
username:string="";
email: string = '';
password: string = '';
bio:string='';
phone:string='';
cnfpwd:string='';
gender:string='';
clearPage(){
  this.fname = '';
  this.dobdate = '';
  this.username = '';
  this.email = '';
  this.password = '';
  this.cnfpwd = '';
  this.bio = '';
  this.phone = '';
  this.gender='';
  this.form.reset();
  alert('Page Cleared Sucessfully')  
}


submitform(){
  if(this.fname &&
     this.dobdate &&
      this.username &&
       this.email &&
        this.password === this.cnfpwd &&
        this.bio &&
         this.phone)
         {
          const formData = {
            fname:this.fname,
            email:this.email,
            gender:this.gender,
            phone:this.phone,         
          };

          this.listService.setFormData(formData);
          this.router.navigate(['/list']);
    alert("Form Submitted Successfully")
  
  }else{
    alert("Enter a valid form")
  }
} 
}


