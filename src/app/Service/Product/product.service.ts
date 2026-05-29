import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { db_URL, PORT } from "../../../environment";
@Injectable()
export class ProductService {
    dbName: string = 'product'

    constructor(private http: HttpClient){}

    Create(){

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post
        
    }

    get(){
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.get(`${db_URL}:${PORT}/${this.dbName}`, {headers: httpHeaders})
        
    }
}