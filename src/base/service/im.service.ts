import { Inject, Injectable } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { AppConfig, APP_CONFIG } from "../../environments/env.config";
import { NotificationConfig } from '../config/notification.config';
import { UserStorageService } from "../storage/user.storage.service";



@Injectable()


export class ImService {

    private ws: any = {};

    constructor(

        @Inject(UserStorageService) public userStorage: UserStorageService,
        @Inject(APP_CONFIG) public config: AppConfig) {

    }

    /**
     * 初始化IM 服务
     */
    initIM() {
        this.ws = new WebSocket((this.config.socketDomain))
        this.ws.onopen = (evt) => {
            console.log("Connection open ...");
            this.loginToWebSocket();
        }

        this.ws.onmessage = (evt) => {
            console.log("Received Message: " + evt.data);
        };

        this.ws.onclose = (evt) => {
            console.log("Connection closed.");
        };

        this.ws.onerror = (evt) => {
            console.log("Connection closed.");
        };
    }



    /**
     * 登录到IM
     */
    /**
 * 执行登录
 */
    loginToWebSocket() {
        this.send({
            act: NotificationConfig.ACT_SYSTEM_IM_LOGIN,
            data: {
                uuid: this.userStorage.getUserData().uuid,
                psid: this.userStorage.getCompanies()[0].psid,
                session_id: this.userStorage.getSessionId()
            }
        });
    }



    /**
    * 发送消息
    * @param message any
    */
    send(message: any) {
        let sendData: string = '';
        if (typeof message === 'object') {
            sendData = JSON.stringify(message);
        } else {
            sendData = message;
        }
        console.log('websocket send message', sendData);
        this.ws.send(sendData);
    }
}