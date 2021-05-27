import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErpHttpClientsService {

  readonly APP_URL = 'http://localhost:8080';

  constructor(private http:HttpClient) {}

  public addnewuser(signupData){
    return this.http.post(this.APP_URL + '/register',signupData,{responseType:'text' as 'json'});
 }

 public isValidUser(signindata):Observable<any>{
  return this.http.post(this.APP_URL + '/authenticateUser',signindata);
 }

 public addProfessorDtls(addProfessorDtls){
  return this.http.post(environment.apiUrl + '/professor/addProfessor',addProfessorDtls);
 }
}
