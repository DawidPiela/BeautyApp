import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { UtilService } from '../util.service';
import { Employee } from '../employee';


@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    @Input('employee') employee: Employee;
    employees: Array<Employee> = [];

    sortField: string = 'id';
    sortDirection: string = 'asc';
    sortFields: Array<string> = [
        'id',
        'firstName',
        'lastName',
        'dateOfBirth',
        'function',
        'experience'
    ];

    filterField: string = 'id';
    filterFields: Array<string> = [
        'id',
        'firstName',
        'lastName',
        'dateOfBirth',
        'function',
        'experience'
    ];

    constructor(
        private _employeeService: EmployeeService,
        private utilService: UtilService
    ) { }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData);
    }

}