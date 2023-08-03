import React from 'react';
import recipeImage from './recipe.jpg';

const Recipe = () => {
  return (
    <div className="recipe">
      <div style={{ border: '20px solid green', borderRadius: '30px', overflow: 'hidden' }}>
        <img src={recipeImage} alt="Recipe" style={{ width: '100%' }} />
      </div>
      <h2>Naziv recepta</h2>
      <p>Sastojci:</p>
      <ul>
        <li>Sastojka 1</li>
        <li>Sastojka 2</li>
        
      </ul>
      <p>Postupak:</p>
      <p>Ovde ide opis postupka za pripremu recepta.</p>
    </div>
  );
};

export default Recipe;
