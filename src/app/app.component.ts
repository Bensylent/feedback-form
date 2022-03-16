import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Feedback } from './feedback';
import { FeedbackService } from '../app/shared/api.service';


interface Department {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private formBuilder: FormBuilder,private api:FeedbackService) {}

  ngOnInit():void {
    this.feedbackForm = this.formBuilder.group({
      frequency: ['', Validators.required],
      satisfaction: ['', Validators.required],
      department: [''],
      reportType: ['', Validators.required],
      comments:[''],

    });
    this.getFeedbackData()
  }
  
  title = 'project-one';
  feedbackForm: FormGroup;  
  feedBackData:any

  selectedValue: string;

  reportFormArray: Array<any> = [];
  categories = [ 
    {name :"Client Success", id: 1},
    {name :"Bussiness Development", id: 2},
    {name :"Operation", id: 3},
    {name :"Ecocash Multipart", id: 4}
  ];

    onChange(event:any,report:string) {
    const isChecked = event.target.checked 
      if(isChecked) {
        this.reportFormArray.push(report);
      } else {
        let index = this.reportFormArray.indexOf(report);
        this.reportFormArray.splice(index,1);
      }
  }
 

 feedbackObj :Feedback = new Feedback();
 postFeedbackDetails(){
   this.feedbackObj.comments=this.feedbackForm.value.comments;
  // this.feedbackObj.reportType=this.feedbackForm.value.reportType;
   this.feedbackObj.reportType=this.reportFormArray.toString();
   this.feedbackObj.satisfaction=this.feedbackForm.value.satisfaction;
   this.feedbackObj.frequency=this.feedbackForm.value.frequency;
   this.feedbackObj.department=this.selectedValue;

   this.api.postFeedback(this.feedbackObj)
   .subscribe(res=>{
     console.log(res);
     alert("Feedback Added Successfully")
     this.feedbackForm.reset()
   },
   err=>{
    alert("Feedback Added Successfully") 
   })
 }
  
displayStyle = "none";
openPopup() {
  this.displayStyle = "block";
}
closePopup() {
  this.displayStyle = "none";
}
 
getFeedbackData(){
  this.api.getFeedback()
  .subscribe(res=>{
    this.feedBackData=res
  })
}

deleteFeedbackData(row:any){
  this.api.deleteFeedback(row.id)
  .subscribe(res=>{
    alert("Feedback Deleted!")
  })
}

onEdit(row:any){
this.openPopup() 
this.feedbackObj.id=row.id
this.feedbackForm.controls['comments'].setValue(row.comments)
this.feedbackForm.controls['reportType'].setValue(row.reportType)
this.feedbackForm.controls['department'].setValue(row.department)
this.feedbackForm.controls['frequency'].setValue(row.frequency)
this.feedbackForm.controls['satisfaction'].setValue(row.satisfaction)
}

updateFeedbackDetails(){
  this.feedbackObj.comments=this.feedbackForm.value.comments;
  this.api.updateFeedback(this.feedbackObj,this.feedbackObj.id)
  .subscribe(res=>{
    alert("Update Successfully")
  })
}

 
}

 