import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1bcb5423-3913-41bf-ad0a-36a49ffb489c"
    }
})


export const UsersAPI = {
    setUsers(pageSize) {
        return instance.get(`users?page=1&count=${pageSize}`)
        .then( 
             response =>   {   
                 return response.data;
              }   
        )   
    },
    getUsers(userID) {
        return instance.get(`profile/` + userID)
        .then( 
             response =>   {   
                 return response.data;
              }   
        )    
    },
    moreUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(
            response => {
                return response.data;
            }
        )
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`)
        .then(
            response => {
                return response.data;
            }
        )
    },
    setStatus(status){
        return instance.put(`profile/status/`, { status })
        .then(
            response => {
                return response.data;
            }
        )
    },

}

export const FollowAPI = {

    postFollow(id) {
        return instance.post(`follow/${id}`)
        .then( 
             response =>   {   
                return response.data;
            }   
        )        
    },
    deleteFollow(id) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then( 
             response =>   {   
                return response.data;
              }   
        )       
    }

}

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
        .then( 
             response =>   { 
                return response.data;
        })   
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, ({email, password, rememberMe}))
        .then( 
             response =>   { 
                return response.data;
        })   
    },
    logout() {
        return instance.delete(`auth/login`)
        .then( 
             response =>   { 
                return response.data;
        })   
    },
    
}
