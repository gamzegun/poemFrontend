import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
const helper = new JwtHelperService();
export function getToken() {
  return localStorage.getItem(environment.tokenName);
}
export function setToken(value:string) {
  localStorage.setItem(environment.tokenName, value);
}
export function removeToken() {
  localStorage.removeItem(environment.tokenName);
}

export function isTokenExpired() {
  return helper.isTokenExpired(getToken());
}

export function getUserId() {
  const decodedToken = helper.decodeToken(getToken());
  if (decodedToken !== null) {
    return decodedToken.userId;
  }
  return ""
}

export function getName() {
  let token=getToken();
  if (token!==null){
    const decodedToken = helper.decodeToken(token);
    if (decodedToken !== null) {
      return decodedToken.name;
    }
  }else {
    return null;
  }
}
