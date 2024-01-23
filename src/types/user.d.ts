export interface UserInfo {
  id: string;
  account: string;
  mobile: string;
  token: string;
  avatar: string;
  nickname: string;
  gender: string;
  birthday?: string;
  cityCode: string;
  provinceCode: string;
  profession: string;
}
export interface AccessInfo {
  accessToken: string;
  expiresTime: string;
  refreshToken: string;
}
