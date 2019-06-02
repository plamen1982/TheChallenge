import { get } from "../data/api";

/** Class used as service for fetching data */
class UserService {
    /**
     * Create a baseUrl and allDevicesUrl
     */
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
        this.allUsersUrl = `${this.baseUrl}/users`;
    }
    /**
     * get all users from url https://jsonplaceholder.typicode.com/users
     * @returns {Promise} with the data from the api at this url
     */
    getAllUsers() {
        return get(this.allUsersUrl);
    }
}

export default UserService;
