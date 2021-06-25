import ApiService from '@/services/ApiService';

export default class BaseService {
    targetClass;

    constructor(ModelClass) {
        this.targetClass = ModelClass;
    }
    static _query(params) {
        return new Promise(async (resolve, reject) => {
            try {
                let _res = await ApiService.query(this._url, params);
                resolve(_res);
            } catch (err) {
                return reject(err);
            }
        });
    }
    static _get(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let _res = await ApiService.get(this._url, id);
                resolve(_res);
            } catch (err) {
                return reject(err);
            }
        });
    }
    static _update(id, params) {
        return new Promise(async (resolve, reject) => {
            try {
                let _res = await ApiService.update(this._url, id, params);
                resolve(_res);
            } catch (err) {
                return reject(err);
            }
        });
    }
    static _delete(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let _res = await ApiService.delete(this._url, id);
                resolve(_res);
            } catch (err) {
                return reject(err);
            }
        });
    }
}