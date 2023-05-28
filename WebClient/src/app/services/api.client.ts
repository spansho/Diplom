import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiClient {
    protected apiRoot = "http://localhost:5000/api";

    constructor(
        protected http: HttpClient,
        protected zone: NgZone
    ) {
    }

    public post(url: string, data: any, silent?: boolean): Promise<any> {
        const observable = this.http.post(`${this.apiRoot}/${url}`, JSON.stringify(data), { headers: this.getHeaders(), observe: "response", withCredentials: this.getCredentialsOption() });
        return this.subscribe(observable, url, silent);
    }

    protected getHeaders(): HttpHeaders {
        return new HttpHeaders({ "content-type": "application/json", "cache-control": "no-cache" });
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
                }
            });
        });

        return promise;
    }
}