import { CompanyModel } from './company-model';

export class UserModel {
  public session_id: string;
  public uuid: string;
  public name: string;
  public phone: string;
  public email: string;
  public user_profile_path: string;
  public companies: Array<CompanyModel> = [];
  public logout_interval: string;
  public auto_logout: AutoLogout;
  constructor(UserInfo: any) {
    this.session_id = UserInfo.session_id;
    this.uuid = UserInfo.uuid;
    this.name = UserInfo.name;
    this.phone = UserInfo.phone;
    this.email = UserInfo.email;
    this.user_profile_path = UserInfo.user_profile_path;
    this.companies = UserInfo.companies;
    this.logout_interval = UserInfo.logout_interval;
    this.auto_logout = UserInfo.auto_logout;
  }
  /**
   * 获取用户当前公司
   */
  getCurrentCompany(): CompanyModel | null {
    return this.companies ? this.companies[0] : null;
  }
  /**
   * 获取用户当前psid
   */
  getCurrentPositionStructureId(): string | null {
    return this.getCurrentCompany() ? this.getCurrentCompany().psid : null;
  }
  /**
   * 根据cid 查询公司信息
   * @param cid string
   */
  getCompanyByCid(cid: string) {
    let find;
    for (const k in this.companies) {
      if (this.companies[k].cid === cid) {
        find = this.companies[k];
        break;
      }
    }
    return find;
  }
}

export enum AutoLogout {
  yes = '1',
  no = '0'
}

export const EmptyUserData = {
  session_id: '',
  uuid: '',
  name: '',
  phone: '',
  email: '',
  user_profile_path: '',
  companies: [],
  logout_interval: '0',
  auto_logout: AutoLogout.yes,
};
