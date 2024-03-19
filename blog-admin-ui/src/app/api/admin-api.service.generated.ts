//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const ADMIN_API_BASE_URL = new InjectionToken<string>('ADMIN_API_BASE_URL');

@Injectable({
    providedIn: 'root'
})
export class AdminApiAuthApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(ADMIN_API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    login(body?: LoginRequest | undefined): Observable<AuthenticatedResult> {
        let url_ = this.baseUrl + "/api/admin/auth";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLogin(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<AuthenticatedResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<AuthenticatedResult>;
        }));
    }

    protected processLogin(response: HttpResponseBase): Observable<AuthenticatedResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticatedResult.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

@Injectable({
    providedIn: 'root'
})
export class AdminApiPostApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(ADMIN_API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    createPost(body?: CreatePostDto | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/admin/post";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreatePost(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreatePost(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processCreatePost(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    deletePosts(body?: string[] | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/admin/post";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeletePosts(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeletePosts(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processDeletePosts(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    updatePost(id: string, body?: CreatePostDto | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/admin/post/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdatePost(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdatePost(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processUpdatePost(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    getPostById(id: string): Observable<PostDto> {
        let url_ = this.baseUrl + "/api/admin/post/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetPostById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetPostById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<PostDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<PostDto>;
        }));
    }

    protected processGetPostById(response: HttpResponseBase): Observable<PostDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PostDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param keyword (optional) 
     * @param categoryId (optional) 
     * @param pageIndex (optional) 
     * @param pageSize (optional) 
     * @return Success
     */
    getPostsPaging(keyword?: string | null | undefined, categoryId?: string | null | undefined, pageIndex?: number | undefined, pageSize?: number | undefined): Observable<PostInListDtoPageResult> {
        let url_ = this.baseUrl + "/api/admin/post/paging?";
        if (keyword !== undefined && keyword !== null)
            url_ += "keyword=" + encodeURIComponent("" + keyword) + "&";
        if (categoryId !== undefined && categoryId !== null)
            url_ += "categoryId=" + encodeURIComponent("" + categoryId) + "&";
        if (pageIndex === null)
            throw new Error("The parameter 'pageIndex' cannot be null.");
        else if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetPostsPaging(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetPostsPaging(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<PostInListDtoPageResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<PostInListDtoPageResult>;
        }));
    }

    protected processGetPostsPaging(response: HttpResponseBase): Observable<PostInListDtoPageResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PostInListDtoPageResult.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

@Injectable({
    providedIn: 'root'
})
export class AdminApiTestApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(ADMIN_API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    testAuthen(): Observable<void> {
        let url_ = this.baseUrl + "/api/Test";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processTestAuthen(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processTestAuthen(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processTestAuthen(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

@Injectable({
    providedIn: 'root'
})
export class AdminApiTokenApiClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(ADMIN_API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    refresh(body?: TokenRequest | undefined): Observable<AuthenticatedResult> {
        let url_ = this.baseUrl + "/api/Token/refresh";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRefresh(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRefresh(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<AuthenticatedResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<AuthenticatedResult>;
        }));
    }

    protected processRefresh(response: HttpResponseBase): Observable<AuthenticatedResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticatedResult.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    revoke(): Observable<void> {
        let url_ = this.baseUrl + "/api/Token/revoke";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRevoke(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRevoke(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processRevoke(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class AuthenticatedResult implements IAuthenticatedResult {
    token?: string | undefined;
    refreshToken?: string | undefined;

    constructor(data?: IAuthenticatedResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.token = _data["token"];
            this.refreshToken = _data["refreshToken"];
        }
    }

    static fromJS(data: any): AuthenticatedResult {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticatedResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        data["refreshToken"] = this.refreshToken;
        return data;
    }
}

export interface IAuthenticatedResult {
    token?: string | undefined;
    refreshToken?: string | undefined;
}

export class CreatePostDto implements ICreatePostDto {
    name?: string | undefined;
    slug?: string | undefined;
    categoryId?: string;
    content?: string | undefined;
    source?: string | undefined;
    tags?: string | undefined;
    seoDescription?: string | undefined;
    description?: string | undefined;
    thumbnail?: string | undefined;

    constructor(data?: ICreatePostDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.slug = _data["slug"];
            this.categoryId = _data["categoryId"];
            this.content = _data["content"];
            this.source = _data["source"];
            this.tags = _data["tags"];
            this.seoDescription = _data["seoDescription"];
            this.description = _data["description"];
            this.thumbnail = _data["thumbnail"];
        }
    }

    static fromJS(data: any): CreatePostDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreatePostDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["slug"] = this.slug;
        data["categoryId"] = this.categoryId;
        data["content"] = this.content;
        data["source"] = this.source;
        data["tags"] = this.tags;
        data["seoDescription"] = this.seoDescription;
        data["description"] = this.description;
        data["thumbnail"] = this.thumbnail;
        return data;
    }
}

export interface ICreatePostDto {
    name?: string | undefined;
    slug?: string | undefined;
    categoryId?: string;
    content?: string | undefined;
    source?: string | undefined;
    tags?: string | undefined;
    seoDescription?: string | undefined;
    description?: string | undefined;
    thumbnail?: string | undefined;
}

export class LoginRequest implements ILoginRequest {
    userName?: string | undefined;
    password?: string | undefined;

    constructor(data?: ILoginRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userName = _data["userName"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): LoginRequest {
        data = typeof data === 'object' ? data : {};
        let result = new LoginRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["password"] = this.password;
        return data;
    }
}

export interface ILoginRequest {
    userName?: string | undefined;
    password?: string | undefined;
}

export class PostDto implements IPostDto {
    id?: string;
    name?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
    thumbnail?: string | undefined;
    viewCount?: number;
    dateCreated?: Date;
    paidDate?: Date | undefined;
    categoryId?: string;
    content?: string | undefined;
    authorUserId?: string;
    source?: string | undefined;
    tags?: string | undefined;
    seoDescription?: string | undefined;
    dateModified?: Date | undefined;
    isPaid?: boolean;
    royaltyAmount?: number;
    status?: PostStatus;

    constructor(data?: IPostDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.slug = _data["slug"];
            this.description = _data["description"];
            this.thumbnail = _data["thumbnail"];
            this.viewCount = _data["viewCount"];
            this.dateCreated = _data["dateCreated"] ? new Date(_data["dateCreated"].toString()) : <any>undefined;
            this.paidDate = _data["paidDate"] ? new Date(_data["paidDate"].toString()) : <any>undefined;
            this.categoryId = _data["categoryId"];
            this.content = _data["content"];
            this.authorUserId = _data["authorUserId"];
            this.source = _data["source"];
            this.tags = _data["tags"];
            this.seoDescription = _data["seoDescription"];
            this.dateModified = _data["dateModified"] ? new Date(_data["dateModified"].toString()) : <any>undefined;
            this.isPaid = _data["isPaid"];
            this.royaltyAmount = _data["royaltyAmount"];
            this.status = _data["status"];
        }
    }

    static fromJS(data: any): PostDto {
        data = typeof data === 'object' ? data : {};
        let result = new PostDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["slug"] = this.slug;
        data["description"] = this.description;
        data["thumbnail"] = this.thumbnail;
        data["viewCount"] = this.viewCount;
        data["dateCreated"] = this.dateCreated ? this.dateCreated.toISOString() : <any>undefined;
        data["paidDate"] = this.paidDate ? this.paidDate.toISOString() : <any>undefined;
        data["categoryId"] = this.categoryId;
        data["content"] = this.content;
        data["authorUserId"] = this.authorUserId;
        data["source"] = this.source;
        data["tags"] = this.tags;
        data["seoDescription"] = this.seoDescription;
        data["dateModified"] = this.dateModified ? this.dateModified.toISOString() : <any>undefined;
        data["isPaid"] = this.isPaid;
        data["royaltyAmount"] = this.royaltyAmount;
        data["status"] = this.status;
        return data;
    }
}

export interface IPostDto {
    id?: string;
    name?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
    thumbnail?: string | undefined;
    viewCount?: number;
    dateCreated?: Date;
    paidDate?: Date | undefined;
    categoryId?: string;
    content?: string | undefined;
    authorUserId?: string;
    source?: string | undefined;
    tags?: string | undefined;
    seoDescription?: string | undefined;
    dateModified?: Date | undefined;
    isPaid?: boolean;
    royaltyAmount?: number;
    status?: PostStatus;
}

export class PostInListDto implements IPostInListDto {
    id?: string;
    name?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
    thumbnail?: string | undefined;
    viewCount?: number;
    dateCreated?: Date;
    status?: PostStatus;
    paidDate?: Date | undefined;

    constructor(data?: IPostInListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.slug = _data["slug"];
            this.description = _data["description"];
            this.thumbnail = _data["thumbnail"];
            this.viewCount = _data["viewCount"];
            this.dateCreated = _data["dateCreated"] ? new Date(_data["dateCreated"].toString()) : <any>undefined;
            this.status = _data["status"];
            this.paidDate = _data["paidDate"] ? new Date(_data["paidDate"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): PostInListDto {
        data = typeof data === 'object' ? data : {};
        let result = new PostInListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["slug"] = this.slug;
        data["description"] = this.description;
        data["thumbnail"] = this.thumbnail;
        data["viewCount"] = this.viewCount;
        data["dateCreated"] = this.dateCreated ? this.dateCreated.toISOString() : <any>undefined;
        data["status"] = this.status;
        data["paidDate"] = this.paidDate ? this.paidDate.toISOString() : <any>undefined;
        return data;
    }
}

export interface IPostInListDto {
    id?: string;
    name?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
    thumbnail?: string | undefined;
    viewCount?: number;
    dateCreated?: Date;
    status?: PostStatus;
    paidDate?: Date | undefined;
}

export class PostInListDtoPageResult implements IPostInListDtoPageResult {
    currentPage?: number;
    pageCount?: number;
    pageSize?: number;
    rowCount?: number;
    readonly firstRowOnPage?: number;
    readonly lastRowOnPage?: number;
    additionalData?: string | undefined;
    results?: PostInListDto[] | undefined;

    constructor(data?: IPostInListDtoPageResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.currentPage = _data["currentPage"];
            this.pageCount = _data["pageCount"];
            this.pageSize = _data["pageSize"];
            this.rowCount = _data["rowCount"];
            (<any>this).firstRowOnPage = _data["firstRowOnPage"];
            (<any>this).lastRowOnPage = _data["lastRowOnPage"];
            this.additionalData = _data["additionalData"];
            if (Array.isArray(_data["results"])) {
                this.results = [] as any;
                for (let item of _data["results"])
                    this.results!.push(PostInListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PostInListDtoPageResult {
        data = typeof data === 'object' ? data : {};
        let result = new PostInListDtoPageResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["currentPage"] = this.currentPage;
        data["pageCount"] = this.pageCount;
        data["pageSize"] = this.pageSize;
        data["rowCount"] = this.rowCount;
        data["firstRowOnPage"] = this.firstRowOnPage;
        data["lastRowOnPage"] = this.lastRowOnPage;
        data["additionalData"] = this.additionalData;
        if (Array.isArray(this.results)) {
            data["results"] = [];
            for (let item of this.results)
                data["results"].push(item.toJSON());
        }
        return data;
    }
}

export interface IPostInListDtoPageResult {
    currentPage?: number;
    pageCount?: number;
    pageSize?: number;
    rowCount?: number;
    firstRowOnPage?: number;
    lastRowOnPage?: number;
    additionalData?: string | undefined;
    results?: PostInListDto[] | undefined;
}

export enum PostStatus {
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _5 = 5,
    _6 = 6,
}

export class TokenRequest implements ITokenRequest {
    accessToken?: string | undefined;
    refreshToken?: string | undefined;

    constructor(data?: ITokenRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.accessToken = _data["accessToken"];
            this.refreshToken = _data["refreshToken"];
        }
    }

    static fromJS(data: any): TokenRequest {
        data = typeof data === 'object' ? data : {};
        let result = new TokenRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["refreshToken"] = this.refreshToken;
        return data;
    }
}

export interface ITokenRequest {
    accessToken?: string | undefined;
    refreshToken?: string | undefined;
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    return _observableThrow(new SwaggerException(message, status, response, headers, result));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}