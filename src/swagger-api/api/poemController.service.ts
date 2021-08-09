/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Poem } from '../model/poem';
import { ResponseModel } from '../model/responseModel';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {environment} from "../../environments/environment";


@Injectable()
export class PoemControllerService {

    protected basePath = environment.baseUrl;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public _delete(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public _delete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public _delete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public _delete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/delete/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public add1(body: Poem, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public add1(body: Poem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public add1(body: Poem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public add1(body: Poem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling add1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ResponseModel>('post',`${this.basePath}/rest/poem/add`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAll(observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getAll`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllByCount(observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getAllByCount(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getAllByCount(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getAllByCount(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getAllByCount`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllByUserId(userId: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getAllByUserId(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getAllByUserId(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getAllByUserId(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getAllByUserId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getAllByUserId/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllByUserIdAndCount(userId: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getAllByUserIdAndCount(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getAllByUserIdAndCount(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getAllByUserIdAndCount(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getAllByUserIdAndCount.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getAllByUserIdAndCount/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param categoryId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCategory(categoryId: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getByCategory(categoryId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getByCategory(categoryId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getByCategory(categoryId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling getByCategory.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getByCategory/${encodeURIComponent(String(categoryId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getById(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getById(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getById/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByIdAndUserId(id: number, userId: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getByIdAndUserId(id: number, userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getByIdAndUserId(id: number, userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getByIdAndUserId(id: number, userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByIdAndUserId.');
        }

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getByIdAndUserId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getByIdAndUserId/${encodeURIComponent(String(id))}/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param text
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPoemsBySearchText(text: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getPoemsBySearchText(text: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getPoemsBySearchText(text: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getPoemsBySearchText(text: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling getPoemsBySearchText.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getPoemsBySearchText/${encodeURIComponent(String(text))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param text
     * @param categoryId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPoemsBySearchTextAndCategoryId(text: string, categoryId: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public getPoemsBySearchTextAndCategoryId(text: string, categoryId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public getPoemsBySearchTextAndCategoryId(text: string, categoryId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public getPoemsBySearchTextAndCategoryId(text: string, categoryId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling getPoemsBySearchTextAndCategoryId.');
        }

        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling getPoemsBySearchTextAndCategoryId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseModel>('get',`${this.basePath}/rest/poem/getPoemsBySearchTextAndCategoryId/${encodeURIComponent(String(text))}/${encodeURIComponent(String(categoryId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public update(body: Poem, observe?: 'body', reportProgress?: boolean): Observable<ResponseModel>;
    public update(body: Poem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseModel>>;
    public update(body: Poem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseModel>>;
    public update(body: Poem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling update.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ResponseModel>('post',`${this.basePath}/rest/poem/update`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
