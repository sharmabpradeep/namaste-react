import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

const AppLayout = () => {
    return(
        <div className='app'>
            <Header/>
            {/* //Header we will first build 
            //Body will be build second 
            //Footer we will build at last */}
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);