import axios from 'axios';
import { UserModel } from '../models/user-model';

const url = 'http://localhost:5000/'
const api = {
    async getAllUsers(search='', sort='', order =''){
        const response=await axios.get(`${url}users?q=${search}&_sort=${sort}&_order=${order}`);
        return response.data;
    },
    async getUser(id:string){
        const response=await axios.get(`${url}users/${id}`);
        return response.data;
    },
    async createUser(user:UserModel){
        await axios.post(`${url}users`, user);
        return this.getAllUsers();
    },
    async updateUser(id:string, user: UserModel){
        await axios.put(`${url}users/${id}`, user);
        return this.getAllUsers();
    },
    async deleteUser(id:string){
        await axios.delete(`${url}users/${id}`);
        return this.getAllUsers();
    }
}

export default api