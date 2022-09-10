
import requests from "./httpServies";

class AuthService {
    login(body) {
        return requests.post('/signin', body)
    }
    login_ngo(body){
        return requests.post('/signinvol',body)
    }
    register(body) {
        return requests.post('/registerVolunteer', body)
    }
}

export default new AuthService();