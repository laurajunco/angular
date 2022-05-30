export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(this.loggedIn), 200)
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log(this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    console.log(this.loggedIn);
  }
}
