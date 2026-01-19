

import { create } from "zustand";
import api from "../api/api";

const userStore = create((set) => ({
     user: null,
     loading: true,


     checkAuth: async () => {
        try{
            const response = await api.get('/auth/me')
            if(response.data.success) {
                set({user: response.data.data, loading: false})
            }else{
                set({user: null, loading: false})
            }
        }catch(err){
            throw err;
        }
     },

     signup: async (username, email, password) => {
        try{
            const response = await api.post('/auth/signup', {username, email, password})
            if(response.data.success) {
                set({user: response.data.data, loading: false})
            }else{
                set({user: null, loading: false})
            }
        }catch(err){
            throw err;
        }
     },

     login: async (email, password) => {
        try{
            const response = await api.post('/auth/login', {email, password})
            if(response.data.success) {
                set({user: response.data.data, loading: false})
            }else{
                set({user: null, loading: false})
            }
        }catch(err){
            throw err;
        }
     }
}))


export default userStore;