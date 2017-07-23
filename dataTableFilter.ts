import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dataTableFilter'
})
@Injectable()
export class DataTableFilter implements PipeTransform {

    IsBlank(keyVal) {
        if (keyVal) {
            return false;
        }
        else {
            return true;
        }
    }

    transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {
        let NumOfProperties: number = Object.keys(filter).length;

        let nonNullFilter: { [key: string]: any }={};

        Object.keys(filter).forEach(key=>{
               if(!this.IsBlank(filter[key]))
                {
                        nonNullFilter[key]=filter[key];
                } 
        });
        return items.filter(item => {
            let notMatchingField = Object.keys(nonNullFilter).find(key =>!(new RegExp('\\b' + filter[key], 'gi').test( item[key])));

            if (notMatchingField) {
                let counter: number = 0;
                for (let prop in filter) {
                    if (!(filter[prop])) {
                        counter++;
                    }
                }
                if (NumOfProperties == counter) {
                    return true;
                }
            }
            else {
                return !notMatchingField; // true if matches all fields
            }
        });
    }
}