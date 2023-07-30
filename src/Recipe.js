import React from 'react';
const Recipe = () => {
  return (
    <div className="recipe">
      <h2>Naziv recepta</h2>
      <p>Sastojci:</p>
      <ul>
        <li>Sastojka 1</li>
        <li>Sastojka 2</li>
        {}
      </ul>
      <p>Postupak:</p>
      <p>Ovde ide opis postupka za pripremu recepta.</p>
    </div>
  );
};

export default Recipe;