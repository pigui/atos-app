/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreatePostDto } from '../models/create-post-dto';
import { PostWithUser } from '../models/post-with-user';
import { UpdatePostDto } from '../models/update-post-dto';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postControllerFindAll
   */
  static readonly PostControllerFindAllPath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  postControllerFindAll$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PostWithUser>>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostControllerFindAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PostWithUser>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postControllerFindAll(params?: {

  }): Observable<Array<PostWithUser>> {

    return this.postControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PostWithUser>>) => r.body as Array<PostWithUser>)
    );
  }

  /**
   * Path part for operation postControllerUpdate
   */
  static readonly PostControllerUpdatePath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postControllerUpdate$Response(params: {
      body: UpdatePostDto
  }): Observable<StrictHttpResponse<PostWithUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostControllerUpdatePath, 'put');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostWithUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postControllerUpdate(params: {
      body: UpdatePostDto
  }): Observable<PostWithUser> {

    return this.postControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<PostWithUser>) => r.body as PostWithUser)
    );
  }

  /**
   * Path part for operation postControllerCreate
   */
  static readonly PostControllerCreatePath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postControllerCreate$Response(params: {
      body: CreatePostDto
  }): Observable<StrictHttpResponse<PostWithUser>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.PostControllerCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostWithUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postControllerCreate(params: {
      body: CreatePostDto
  }): Observable<PostWithUser> {

    return this.postControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<PostWithUser>) => r.body as PostWithUser)
    );
  }

}
