import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  postFeedback(data:any){
    return this.http.post<any>("https://feedback-form-backend.herokuapp.com/feedbacks", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getFeedback(){
    return this.http.get("https://feedback-form-backend.herokuapp.com/feedbacks")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteFeedback(id:number){
    return this.http.delete<any>("https://feedback-form-backend.herokuapp.com/feedbacks/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateFeedback(data:any,id:number){
    return this.http.put<any>("https://feedback-form-backend.herokuapp.com/feedbacks/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
