import api from "./api";

const auth = {
  isAuthenticated: false,

  async authenticate(callbackAuth) {
    const response = await api.get(`/users/me/`, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("authToken")}`
      }
    });

    if(response.data.username){
      this.isAuthenticated = true;
      callbackAuth(this.isAuthenticated);
    }
  },

  signout(cb) {
    this.isAuthenticated = false;
  }
};

export default auth;