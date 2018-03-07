import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api.service';
// import { UserStorageService } from '../storage/user-storage.service';
import { Observable } from 'rxjs/Observable';
import { UserModel, EmptyUserData } from '../model/user-model';
import { StorageKey } from '../config/storage.config';
import { UserStorageService } from '../storage/user.storage.service';
import { ImService } from './im.service';
// import { StorageType } from 'angular-persistence';
// import { WebsocketService } from './websocket.service';
/**
 * 用户常规业务层数据判定
 */
@Injectable()
export class UserService {
    private user: Observable<UserModel>;
    private _currentUser: UserModel;
    constructor(
        @Inject(ApiService) public api: ApiService,
        @Inject(ImService) public imService: ImService,
        @Inject(UserStorageService) public userStorage: UserStorageService,
        // @Inject(WebsocketService) public websocket: WebsocketService
    ) {
        this.user = this.getCurrentUser();
        const self = this;
        this.user.subscribe(user => {
            this._currentUser = user;
            if (user.session_id && user.session_id !== '') {
                // this.initLoginService(user);
            }
        });
    }
    /**
     * 获得用户可观察对象
     * @return Observable<UserModel>
     */
    getCurrentUser(): Observable<UserModel> {
        return this.userStorage.getObservableUser();
    }

    /**
     * 查看用户是否登录
     * @return boolean
     */
    checkLoginStatus(): boolean {
        return this.userStorage.getSessionId() && this.userStorage.getSessionId() !== '' && this.userStorage.getSessionId() !== null;
    }

    //   getCurrentLanguage(): string {
    //     return this.userStorage.getByKey(StorageKey.LAN, StorageType.LOCAL);
    //   }

    //   setCurrentLanguage(lan: string): void {
    //     this.userStorage.setByKey(StorageKey.LAN, lan, StorageType.LOCAL);
    //   }

    //   initLoginService(user) {
    //     // websocket start
    //     this.websocket.init(user.uuid, user.getCurrentPositionStructureId(), user.session_id);
    //     // api
    //   }

    //   initLogoutService(user) {
    //     this.websocket.close(user.uuid, user.getCurrentPositionStructureId(), user.session_id);
    //   }

    /**
     * 登录相关数据初始化
     * @param val {user: any, companies_information: Array<any>, session_id: string} 根据后端api调整
     */
    applyLogin(val: { user: any, companies_information: Array<any>, session_id: string }) {
        console.log('？？？？？？？？？缓存相关数据', val)
        // session_id
        this.userStorage.setSessionId(val.session_id);
        this.userStorage.setCompanies(val.companies_information);
        // user_data
        // TODO API需要统一命名规则, work_name需要与name区分开
        const userData = val.user ? val.user : {};
        if (userData && userData.hasOwnProperty('work_name')) {
            userData.name = userData.work_name;
            delete userData.work_name;
        }
        this.userStorage.setUserData(userData);
        // companies
        userData.session_id = val.session_id;
        userData.companies = val.companies_information;
        // 更新用户观察对象相关字段
        this.userStorage.updateObservableUser(userData);
        //登录之后初始化IM
        this.imService.initIM();
    }
    /**
     * 登出相关数据清除
     * @param val any
     */
    applyLogout() {
        // 由于Observable拿不到旧值，所以先退出IM再执行相关数据变动
        if (this._currentUser) {
            //   this.initLogoutService(this._currentUser);
        }
        const emptyData = EmptyUserData;
        this.userStorage.removeSessionId();
        this.userStorage.removeCompanies();
        this.userStorage.removeUserData();
        this.userStorage.updateObservableUser(emptyData);
    }
    /**
     * 获得联系人列表
     */
    getContactList() {
        if (this._currentUser) {

        } else {
            console.log('you\'re not login');
        }
    }

}
