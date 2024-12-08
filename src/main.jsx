import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Errorpage from './Errorpage.jsx';
import Root from './Root.jsx';
import Home from './Component/Home.jsx';
import Login from './logregComponent/Login.jsx';
import Register from './logregComponent/Register.jsx';
import Authprovider from './Authprovider.jsx';
import Addmovie from './Component/Addmovie.jsx';
import Privateroute from './logregComponent/Privateroute.jsx';
import Allmovie from './Component/Allmovie.jsx';
import Myfavorite from './Component/Myfavorite.jsx';
import Bestone from './Component/Bestone.jsx';
import Seedetails from './Component/Seedetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignback.vercel.app/use'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allmovie",
        element: <Allmovie></Allmovie>,
        loader:() => fetch('https://assignback.vercel.app/users'),
      },
      {
        path: "/addmovie",
        element: <Privateroute><Addmovie></Addmovie></Privateroute>,
      },
      {
        path: "/myfavorite",
        element:<Privateroute><Myfavorite></Myfavorite></Privateroute>,
        loader: () => fetch('https://assignback.vercel.app/user'),
      },
      {
        path: "/bestone",
        element: <Privateroute><Bestone></Bestone></Privateroute>,
      },
      // {
      //   path: "/seedetails",
      //   element:<Privateroute><Seedetails></Seedetails></Privateroute>,
      //   loader:() => fetch(` `), 
      // },
      
        {
          path: "/seedetails/:email",
          element: <Privateroute><Seedetails /></Privateroute>,
          loader: ({ params }) => 
            fetch(`https://assignback.vercel.app/users/${params.email}`)
        },
      
    ],
  },
  {
    path: "*",
    element: <Errorpage></Errorpage>,

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
