import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

// import { BiLogService } from '../debug/bi-log.service';
import { APP_CONFIG, AppConfig } from '../../environments/env.config';
import { APIConfig, APIErrorCode } from '../config/api.config';
// import { UserService } from './user.service';
import { StorageKey } from '../config/storage.config';
// import { UserStorageService } from '../storage/user-storage.service';
import { BiResponseModel } from '../model/bi-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable()
export class ApiService {
  private requestUrl: string;

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    // @Inject(UserStorageService) public userStorage: UserStorageService,
    // @Inject(BiLogService) public log: BiLogService
  ) {    
  }

  /**
   * 通用post
   */
  public basePost(apiName: string, data: any, errorHandle?: Function): Observable<any> {
    const url = this.buildRequestUrl(apiName);
    const body = this.buildRequestData(data);
    return this.http.post(url, body, httpOptions).pipe(
      tap(res => this.handleResponse(res)),
      catchError(this.handleError(url, []))
    );
  }

  /**
   * 通用GET
   */
  public baseGet(apiName: string, data?: any, errorHandle?: Function): Observable<any> {
    let url = this.buildRequestUrl(apiName);
    if (data) {
      url += this.buildRequestData(data);
    }
    return this.http.get(url).pipe(
      tap(res => this.handleResponse(res)),
      catchError(this.handleError(url, []))
    );
  }

  /**
   * 普通下载
   */
  public baseDownload() {

  }

  /**
   * 断点续传
   */
  public breakPointDownload() {

  }
  /**
   * TODO 是否在api底层处理error code
   * @param res any
   */
  public defaultHandleStatus(res: BiResponseModel, errorHandle?: Function) {
    // status 不等于 1和0之外都需要处理
    if (res.status !== APIErrorCode.SUCCESS && res.status !== APIErrorCode.ERROR_CODE_COMMON) {
      if (errorHandle) {
        errorHandle(res);
      } else {
        // 弹出框?
        // console.error(res);
      }
    }
  }
  /**
   * 确保返回格式的统一
   * @param res any
   * @param errorHandle Function 错误处理函数
   */
  protected handleResponse(res: any, errorHandle?: Function) {
    const r = new BiResponseModel(res);
    this.defaultHandleStatus(r, errorHandle);
  }


  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log.log(`${operation} failed`, error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
  * 设置请求参数
  * @param data
  */
  public buildRequestData(data: any) {
    const urlSearchParams = new URLSearchParams();
    if (data !== null && data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          if (typeof data[key] === 'object') {
            urlSearchParams.append(key, JSON.stringify(data[key]));
          } else {
            urlSearchParams.append(key, data[key]);
          }
        }
      }
    }
    return urlSearchParams.toString();
  }

  /**
   * 设置请求地址
   * @param apiName string
   */
  public buildRequestUrl(apiName: string) {
    this.requestUrl = '';
    if (this.appConfig.requestByDomain) {
      this.requestUrl = this.appConfig.apiDomain;
    }
    if (APIConfig[apiName]) {
      this.requestUrl += '/' + this.appConfig.apiPrefix + '/' + APIConfig[apiName];
    } else {
      console.error('no api name found' + apiName);
    }
    return this.requestUrl;
  }



}
