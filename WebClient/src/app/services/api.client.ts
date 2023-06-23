import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiClient {
    protected apiRoot = "http://147.78.65.214:5000/api";

    constructor(
        protected http: HttpClient,
        protected zone: NgZone
    ) {
    }

    public get(url: string, isAuth: boolean = false, silent?: boolean, full: boolean = false): Promise<any> {
        const observable = this.http.get(`${this.apiRoot}/${url}`, { headers: this.getHeaders(isAuth), observe: "response", withCredentials: this.getCredentialsOption() });
        return this.subscribe(observable, url, silent, full);
    }

    public post(url: string, data: any, isAuth: boolean = false, silent?: boolean): Promise<any> {
        const observable = this.http.post(`${this.apiRoot}/${url}`, JSON.stringify(data), { headers: this.getHeaders(isAuth), observe: "response", withCredentials: this.getCredentialsOption() });
        return this.subscribe(observable, url, silent);
    }

    protected getHeaders(isAuth: boolean = false): HttpHeaders {
        var httpHeaders = new HttpHeaders({ "content-type": "application/json", "cache-control": "no-cache" });
        if (isAuth) {
            httpHeaders  = new HttpHeaders({ "content-type": "application/json", "cache-control": "no-cache",  "Authorization": "Bearer " + localStorage.getItem('auth_token')});
        }

        return httpHeaders;
    }

    protected getCredentialsOption(): boolean | undefined {
        return undefined;
    }

    protected subscribe(observable: Observable<object>, url: string, silent?: boolean, full: boolean = false): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            observable.subscribe({
                next: r => {
                    setTimeout(() => {
                        this.zone.run(() => {
                            if (full) {
                                resolve(r);
                            } else {
                                resolve(r["body"]);
                            }
                        });
                    });
                },
                error: r => {
                    if (silent) {   // ToDo check
                        if (r.status === 500) {
                            resolve({ code: "500" });
                        } else {
                            resolve(r.error || null);
                        }
                    }
                    if (r.status === 401) {
                        localStorage.removeItem('auth_token');
                        resolve({ code: "401" });
                    }
                }
            });
        });

        return promise;
    }
}