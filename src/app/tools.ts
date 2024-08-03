import { forkJoin, Observable, Subscription, from } from 'rxjs';


export class Tools {

    static objectToArray(Object: any): any[] {
        let arr = []
        if (!Array.isArray(Object)) {
            for (const key in Object) {
                if (Object.hasOwnProperty(key)) {
                    arr.push(Object[key])
                }
            }
        } else {
            arr = [...Object];
        }
        return arr
    }

    static getProperty(Object: any, propertyName: string, defaultValue?: any) {
        if (Object && propertyName in Object) {
            return Object[propertyName]
        }
        return defaultValue
    }
}