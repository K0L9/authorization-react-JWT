class userServ {

    URL_REGISTER = "/api/User/user-register";
    URL_LOGIN = "/api/User/user-login";
    URL_USER = "/api/User/user";
    URL_LOGOUT = "/api/User/logout";

    async register(user) {
        let isRegister = await fetch(this.URL_REGISTER, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(user)
        }).then(responce => {
            if (responce.status === 201) {
                return true;
            }
            else {
                return false;
            }
        });

        return isRegister;
    }

    async login(data) {
        let isLogin = await fetch(this.URL_LOGIN, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then(responce => {
            if (responce.status === 200) {
                return true;
            }
            else {
                return false;
            }
        });

        return isLogin;
    }
    async getUserData() {
        let user = await fetch(this.URL_USER)
            .then((response) => {
                return response.json();
            }).then(data => {
                console.log("DATA: ", data)
                return data;
            })

        return user;
    }
    async logout() {
        await fetch(this.URL_LOGOUT, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
        })
    }
}

let userService = new userServ();
export default userService;