import { User, Status} from '../Models'

import { 
    DB_Users, 
    DB_Statuses, 
    DB_Aliases
} from './db_Builder'

let currentUser = new User("","","","");

const setCurrentUser = (newCurrentUser: User) => {
    currentUser = newCurrentUser;
}

const getCurrentUser = () => {
    return currentUser;
}

const getUser = (userID: string):  User | null => {

    let user = DB_Users.filter( user => {
        return user.getID() === userID;
    })

    if(user.length > 0){
        return user[0];
    } else {
        return null;
    }
}



export { 
    setCurrentUser,
    getCurrentUser, 
    getUser,  
    DB_Statuses, 
    DB_Users,
    DB_Aliases
}

