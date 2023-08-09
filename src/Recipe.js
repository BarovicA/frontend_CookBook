import React, { useEffect, useState } from 'react';
import recipeImage from './recipe.jpg';
import { useLoaderData } from 'react-router';
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
import { async } from 'q';
import ShowRecipe from './RecipeShow';
import RecipeShow from './RecipeShow';

const Recipe = () => {
  const[recipes, setRecipes] = useState([]);

  useEffect(() =>{
    let ignore = false;
    const fetchRecipe = async ()=>{
      let r = await fetch("http://localhost:8080/api/v1/recipes");
      let rr = await r.json();
      if(!ignore){
        setRecipes(rr);
      }
    }
    fetchRecipe();
    return()=>{
      ignore = true;
    }
  }, []);
  

  console.log(recipes);
  
  const[search, setSearch] = useState("");

  const filterRecipe = recipes.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="recipe">
      <div style={{ border: '20px solid green', borderRadius: '30px', overflow: 'hidden' }}>
        <img src={recipeImage} alt="Recipe" style={{ width: '100%' }} />
      </div>
      <TextField size='small' id='outlined-search' label="Pretraga po nazivu recepta" type='search' 
      sx={{backgroundColor:"whitesmoke"}}
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
      <Button size="normal" variant="contained" sx={{backgroundColor:"whitesmoke"}}>Search</Button>
      {filterRecipe.map((r) => <RecipeShow recipe={r}/>)}
      
    </div>
  );
};

export default Recipe;