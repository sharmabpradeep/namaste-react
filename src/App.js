import {React, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    return(
        <div className='app'>
            <Header/>
            {/* //Header we will first build 
            //Body will be build second 
            //Footer we will build at last */}
            {/* <Body/> */}
            {/* Outlet will fill this according to path provided. If it 
            is / then body if it is /about then about and if it is /contact
            then contact will route.  */}
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/grocery",
                element: <Suspense><Grocery/></Suspense>
            },
            {
                path: "/about",
                element: <About/> 
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <ResturantMenu/>
            }
        ],
        errorElement: <Error/>
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)