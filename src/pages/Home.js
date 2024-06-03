import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import auth from '../firebase.init';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widjets';
import {signOut} from 'firebase/auth';
import { useAuthState} from 'react-firebase-hooks/auth';


const Home = () => {

    const user = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth);
    }

    return(
        <div className='app'>
            <Sidebar handleLogout={handleLogout} user={user} />
            <Feed />
            <Widgets />
        </div>
    )
};

export default Home;