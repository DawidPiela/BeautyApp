import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy',
    pure: false
})
export class SortByPipe implements PipeTransform {

    transform(employees: Array<any>, args?: any): any {

        //if (employees) {

            let sortField = args[0];
            let sortDirection = args[1];

            let modifier = 1;

            if (sortDirection == "desc") {
                modifier = -1;
            }

            employees.sort((a, b) => {
                if (a[sortField] < b[sortField]) {
                    return -1 * modifier;
                } else if (a[sortField] > b[sortField]) {
                    return 1 * modifier;
                } else {
                    return a.id - b.id;
                }
            });
            return employees;
        //}
    }
}
