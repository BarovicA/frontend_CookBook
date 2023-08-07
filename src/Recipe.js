import React from 'react';
import recipeImage from './recipe.jpg';

const Recipe = () => {
  return (
    <div className="recipe">
      <div style={{ border: '20px solid green', borderRadius: '30px', overflow: 'hidden' }}>
        <img src={recipeImage} alt="Recipe" style={{ width: '100%' }} />
      </div>
<<<<<<< Updated upstream
      <h2>Naziv recepta</h2>
      <p>Sastojci:</p>
      <ul>
        <li>Sastojka 1</li>
        <li>Sastojka 2</li>
        
      </ul>
      <p>Postupak:</p>
      <p>Ovde ide opis postupka za pripremu recepta.</p>
=======
      <TextField size='small' id='outlined-search' label="Pretraga po nazivu recepta" type='search' 
      sx={{backgroundColor:"whitesmoke"}}
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
      <Button size="normal" variant="contained" sx={{backgroundColor:"whitesmoke"}}>Search</Button>
      {filterRecipe.map((r) => <ShowRecipe recipe={r}/>)}
      
>>>>>>> Stashed changes
    </div>
  );
};

export default Recipe;
