import axios from 'axios';

let $http;
export default {
    init() {
        $http = axios.create({
            baseURL: window.endpoint
        });

        $http.defaults.headers.common['Authorization'] = 'Bearer keyGV5bU4IIzQHKCV';
        return $http;
    },
};
