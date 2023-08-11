import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cook from './Cook';
// import RecipeNew from './RecipeNew';
import Recipe from './Recipe';
// import { async } from 'q';
// import ShowRecipe from './RecipeShow';
import RecipeDetails from './RecipeDetails';
import RecipeShow from './RecipeShow';
import RecipeEdit from './RecipeEdit';
import CookNew from './CookNew';
import CookShow from './CookShow';
// import CookDetails from './CookDetails';
import CookEdit from './CookEdit';

const router = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
    {
    path:'/recipes',
    element:<Recipe/>,
    loader: async()=>{
      return fetch("http://localhost:8080/api/v1/recipes");
    },
    },
    {
      path: '/:id',
      element:<RecipeDetails/>,
      loader: async({params}) =>{
        return fetch(`http://localhost:8080/api/v1/recipes/${params.id}`)
 
          }
    },
    {
      path: '/:id',
      element:<RecipeShow/>,
      loader: async({params}) =>{
        return fetch(`http://localhost:8080/api/v1/recipes/${params.id}`)
 
          }
    },
    {
      path: 'recipes/update/:id',
      element:<RecipeEdit/>,
      loader: async({params}) =>{
        return fetch(`http://localhost:8080/api/v1/recipes/${params.id}`)
      }
    },
    {
      path: '/cookUser',
      element:<Cook/>,
      loader: async()=>{
        return fetch("http://localhost:8080/api/v1/cookUser");
        },
      },
      {
       path:'add_new_cook',
       element:<CookNew/>
       },
        {
          path: '/:id',
          element:<CookShow/>,
          loader: async({params}) =>{
            return fetch(`http://localhost:8080/api/v1/cookUser/${params.id}`)
     
              }
        },
        {
          path: 'cookUser/update/:id',
          element:<CookEdit/>,
          loader: async({params}) =>{
            return fetch(`http://localhost:8080/api/v1/cookUser/${params.id}`)
          }
        },
  
 
  ]
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
