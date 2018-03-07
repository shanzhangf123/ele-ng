import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PersistenceService, StorageType, PersistenceConfig } from 'angular-persistence';
import { StorageKey } from '../config/storage.config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../model/user-model';

@Injectable()
export class UserStorageService extends StorageService {
  private _user: UserModel;
  private _currentUser: BehaviorSubject<any>;
  private _oldCurrentUser: UserModel;
  public currentUser: Observable<any>;
  constructor(protected storage: PersistenceService) {
    super(storage);
    this.initCurrentUser();
  }
  /**
   * 初始化用户
   */
  initCurrentUser() {
    // 根据是否有本地缓存初始化当前用户数据
    let userData = this.getUserData();
    if (userData) {
      userData.session_id = this.getSessionId();
      userData.companies = this.getCompanies();
    } else {
      userData = {
        session_id: this.getSessionId()
      };
    }
    this._user = new UserModel(userData);
    this._currentUser = new BehaviorSubject(this._user);
    this._oldCurrentUser = this._currentUser.getValue();
    this.currentUser = this._currentUser.asObservable();
  }



  /**
   * 获取当前观察用户
   */
  getObservableUser(): Observable<UserModel> {
    return this.currentUser;
  }

  /**
   * 获取当前观察用户
   */
  getObservableOldUser(): UserModel {
    return this._oldCurrentUser;
  }

  /**
   * 更新观察用户对象数据
   */
  updateObservableUser(UserInfo: any) {
    for (const key in UserInfo) {
      if (this._user.hasOwnProperty(key)) {
        this._oldCurrentUser[key] = this._user[key];
        this._user[key] = UserInfo[key];
      }
    }
    this._currentUser.next(this._user);
  }
  /**
   * 根据观察用户对象某个字段
   * @param key string
   * @param val any
   */
  updateObservableUserViaKey(key: string, val: any) {
    if (this._user.hasOwnProperty(key)) {
      this._oldCurrentUser[key] = this._user[key];
      this._user[key] = val;
    }
    this._currentUser.next(this._user);
  }

  /**
  * get session_id
  */
  getSessionId() {
    return this.get(StorageKey.USER_AUTH_KEY);
  }
  /**
   * set session_id
   * @param val any
   */
  setSessionId(val: any, config?: PersistenceConfig) {
    this.set(StorageKey.USER_AUTH_KEY, val, config);
  }
  /**
   * clean session_id
   */
  removeSessionId() {
    this.remove(StorageKey.USER_AUTH_KEY);
  }
  /**
   * get user_data
   */
  getUserData() {
    return this.get(StorageKey.USER_DATA);
  }
  /**
   * user_data
   * @param val any
   */
  setUserData(val: any, config?: PersistenceConfig) {
    return this.set(StorageKey.USER_DATA, val, config);
  }
  /**
   * clean user_data
   */
  removeUserData() {
    this.remove(StorageKey.USER_DATA);
  }
  /**
   * get companies
   */
  getCompanies() {
    return this.get(StorageKey.COMPANIES);
  }
  /**
   * set companies
   * @param val any
   */
  setCompanies(val: any, config?: PersistenceConfig) {
    return this.set(StorageKey.COMPANIES, val, config);
  }
  /**
   * clean companies
   */
  removeCompanies() {
    this.remove(StorageKey.COMPANIES);
  }
}
