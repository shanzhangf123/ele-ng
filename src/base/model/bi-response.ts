import { APIErrorCode } from '../config/api.config';

export class BiResponseModel {
  status: number;
  data: any;
  message: string;
  constructor(res: any) {
    if (!res) {
      res = {status: APIErrorCode.ERROR_CODE_INVAILD_FORMAT, data: {}, message: ''};
    }
    if (!res.hasOwnProperty('status')) {
      res.status = APIErrorCode.ERROR_CODE_MISS_STATUS;
    }
    if (!res.hasOwnProperty('data')) {
      res.status = APIErrorCode.ERROR_CODE_MISS_DATA;
      res.data = {};
    }
    this.status = res.status;
    this.data = res.data;
    this.message = res.message ? res.message : '';
  }
}
