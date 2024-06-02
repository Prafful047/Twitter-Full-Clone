import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widjets';


const Home = () => {
    return(
        <div className='app'>
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
};

export default Home;