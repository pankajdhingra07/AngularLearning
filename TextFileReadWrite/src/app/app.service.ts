import { Injectable } from "@angular/core/core";
import { Http } from "@angular/http";

@Injectable()
export class AppService {
    constructor(private http : Http){}

    save(data){
        this.http.get('http://myservice.com/api/')
            .subscribe(response => response.json())
    }
}