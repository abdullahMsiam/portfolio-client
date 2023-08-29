import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import AllProjects from './pages/allProjects/AllProjects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/all-projects',
        element: <AllProjects></AllProjects>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <div className='bg-neutral-800 text-white mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
