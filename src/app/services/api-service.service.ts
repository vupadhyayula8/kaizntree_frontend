import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
    //  return this.http.post('http://127.0.0.1:8000/login', {'username':username,'password':password},
    //  {headers:this.httpHeaders});

  }
  register(username:any,password:any):Observable<any>
  {
    console.log(username,password);
    return this.http.post('https://kaizntree-backend-3d93edfcaf5a.herokuapp.com/register', {'username':username,'password':password},
     {headers:this.httpHeaders});

    // return this.http.post('http://127.0.0.1:8000/register', {'username':username,'password':password},
    // {headers:this.httpHeaders});

  }
  itemData(username:any):Observable<any>
  {
    console.log(username);
    return this.http.post('https://kaizntree-backend-3d93edfcaf5a.herokuapp.com/register', {'username':username},
     {headers:this.httpHeaders});

    // return this.http.post('http://127.0.0.1:8000/fetch_items', {'username':username},
    // {headers:this.httpHeaders});

  }
}
