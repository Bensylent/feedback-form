import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  postFeedback(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/feedbacks", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getFeedback(){
    return this.http.get("http://127.0.0.1:8000/feedbacks")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteFeedback(id:number){
    return this.http.delete<any>("http://127.0.0.1:8000/feedbacks/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateFeedback(data:any,id:number){
    return this.http.put<any>("http://127.0.0.1:8000/feedbacks/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
