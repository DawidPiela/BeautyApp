import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Employee } from "./Employee";

@Injectable()
export class EmployeeService{

    constructor(private http: Http) {}

    getEmployees() {
        return this.http.get('../assets/sluzba.json')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

}

