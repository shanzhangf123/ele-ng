/**
 * 公司类
 */
export class CompanyModel {
  public cid: string;
  public isStudio: string;
  public name: string;
  public p_name: string;
  public psid: string;
  public suid: string;
  public permission: Array<string>;
  public role: Array<string>;
  public super_admin: SuperAdmin;
  public logo: string;
  constructor(CompanyInfo: any) {

  }
}

export const enum SuperAdmin {
  yes = 1,
  no = 0
}

