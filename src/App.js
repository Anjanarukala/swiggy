import React, { lazy, Suspense, useContext } from 'react'
import "./index.css";
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body'
import Contact from './components/Contact';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import { RestaurantMenu } from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
const App=()=>{
    const {user}=useContext(UserContext)
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={user}>
            <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        
        </Provider>
        
    )
}
const About=lazy(()=>import('./components/About'))
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h2>it is loading </h2>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
