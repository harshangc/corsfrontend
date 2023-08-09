import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PersonService {

  //private personsUrl: string;
  public _personUrl = environment.personUrl;

  constructor(private http: HttpClient) {
    //this.personsUrl = 'http://localhost:8081/person';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this._personUrl);
  }

  public save(person: Person) {
    return this.http.post<Person>(this._personUrl, person);
  }

}
