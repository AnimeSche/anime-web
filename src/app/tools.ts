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

export class AnimeFeatch {
    static parse(html: string) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        const doc = template.content;
        const def_list = doc.querySelectorAll('.g_definitionlist')
        console.log(def_list)
    }
}