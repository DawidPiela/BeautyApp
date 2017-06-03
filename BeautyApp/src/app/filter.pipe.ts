import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {

  transform(employees: Array<any>, args?: any): any {
      if(employees) {
          let form = args[0];
          let filterField = args[1];

          if (form === undefined) {
              return employees;
          }

          if (filterField === 'id') {
              return employees.filter((employee) => {
                  return employee.id.toString().includes(form.toString());
              })
          } else if (filterField === 'firstName') {
              return employees.filter((employee) => {
                  return employee.firstName.toLowerCase().includes(form.toLowerCase());
              })
          } else if (filterField === 'lastName') {
              return employees.filter((employee) => {
                  return employee.lastName.toLowerCase().includes(form.toLowerCase());
              })
          } else if (filterField === 'dateOfBirth') {
              return employees.filter((employee) => {
                  return employee.dateOfBirth.toLowerCase().includes(form.toLowerCase());
              })
          } else if (filterField === 'function') {
              return employees.filter((employee) => {
                  return employee.function.toLowerCase().includes(form.toLowerCase());
              })
          } else if (filterField === 'experience') {
              return employees.filter((employee) => {
                  return employee.experience.toString().includes(form.toString());
              })
          }

          return employees;
      }
  }

}
