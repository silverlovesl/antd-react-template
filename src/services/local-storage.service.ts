import { StringUtils } from '../utils';

class LocalStorageService {
  private readonly AUTH_TOKE_KEY = 'auth_token';

  set authToken(v: string) {
    localStorage.setItem(this.AUTH_TOKE_KEY, v);
  }

  get authToken(): string {
    return localStorage.getItem(this.AUTH_TOKE_KEY);
  }

  /**
   * Remove AuthToken from cookie
   */
  removeAuthToken() {
    console.log('removeAuthToken');
    localStorage.removeItem(this.AUTH_TOKE_KEY);
  }

  get hasAuthorized(): boolean {
    return StringUtils.isBlank(this.authToken) === false;
  }
}

export const localStorageService = new LocalStorageService();
