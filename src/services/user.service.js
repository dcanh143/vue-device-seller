import axios from 'axios';
import {BASE_API_URL} from '../common/constants';
import {authHeader, handleResponseWithLoginCheck} from './base.service'

const API_URL = BASE_API_URL + '/api/user'

class UserService {
    changeRole(role) {
        const req = axios.put(API_URL + '/change/' + role, {}, {headers: authHeader()});
        return handleResponseWithLoginCheck(req);
    }
}

export default new UserService();

