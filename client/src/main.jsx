import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"


//components import
import Home from './views/Home/Home'
import AddFilm from './views/AddFilm/AddFilm';
import EditFilm from './views/EditFilm/EditFilm';

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
path: "/add-film",
element: <AddFilm/>
  },
  {
    path: "/film/edit/:id",
    element: <EditFilm/>,
  },
  
]);
root.render(<RouterProvider router={router}/>)