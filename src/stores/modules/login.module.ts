import { makeObservable, observable, computed, action } from "mobx";

class LoginStore {
  loginID: string = "";
  password: string = "";

  constructor() {
    makeObservable(this, {
      loginID: observable,
      password: observable,
      signin: action,
      setLoginID: action,
      setPassword: action,
    });
  }

  setLoginID(v: string) {
    this.loginID = v;
  }

  setPassword(v: string) {
    this.password = v;
  }

  signin = () => {};
}

export const loginStore = new LoginStore();
