import { ApiResponse } from '@/app/_types/api';


export interface UserState {
  userInfo: {}
  status: string
}

export interface UserInfoResponse extends ApiResponse {
  userInfo: {}
}