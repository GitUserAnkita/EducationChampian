import http from '../http-comman';

class UserService {
    login(data) {
        return http.post("/login", data);
    }
    register(data) {
        return http.post("/createUser", data)
    }
    getAllUsers() {
        return http.get("/user_Detail")
    }

    getUser(id) {
        return http.get("/user_Detail", id)
    }

    deleteUser(id){
        return http.delete(`/user_Deleted/${id}`)
    }
}

export default new UserService;