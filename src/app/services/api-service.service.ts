import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  httpHeaders;
  constructor(private http: HttpClient) { 
   this.httpHeaders = new HttpHeaders
         ({ 'Content-Type': 'application/json',
    }) ;

  }
  login(username:any,password:any):Observable<any>
  {
    console.log(username,password);
    return this.http.post('https://kaizntree-backend-3d93edfcaf5a.herokuapp.com/login', {'username':username,'password':password},
     {headers:this.httpHeaders});

  }
  register(username:any,password:any):Observable<any>
  {
    console.log(username,password);
    return this.http.post('https://kaizntree-backend-3d93edfcaf5a.herokuapp.com/register', {'username':username,'password':password},
     {headers:this.httpHeaders});

  }
}
