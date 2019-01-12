import users from "../assets/json/user.json";

class UserService {
    static login(username, password, callback) {
        users.map((user) => {
            if (user.username === username && user.password === password) {
                callback && callback(true);
            } else {
                callback && callback(false);
            }
        })
    }
}

export default UserService;