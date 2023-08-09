import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import RecipeNew from './RecipeNew';
import cookImage from './cook.jpg';

const Cook = ({ onHomeClick }) => {
  const [openAddRecipeModal, setOpenAddRecipeModal] = useState(false);

  const handleOpenAddRecipeModal = () => {
    setOpenAddRecipeModal(true);
  };

  const handleCloseAddRecipeModal = () => {
    setOpenAddRecipeModal(false);
  };

  return (
    <div>
      <div>
        <Typography variant="h2">Cook Panel</Typography>
        <Button onClick={onHomeClick} variant="contained" color="primary">
          Home
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenAddRecipeModal}
        >
          <NavLink to="add_new_recipe">Add Recipe</NavLink>
        </Button>
        <Button variant="contained" color="primary">
          Logout
        </Button>
      </div>

      
      <Dialog
        open={openAddRecipeModal}
        onClose={handleCloseAddRecipeModal}
      >
        <DialogTitle>Add New Recipe</DialogTitle>
        <DialogContent>
          <RecipeNew onClose={handleCloseAddRecipeModal} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseAddRecipeModal}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

     
      <img src={cookImage} alt="Cook" style={{ width: '100%', maxWidth: '1100px', borderRadius: '200px', opacity: '1', transition: 'opacity 0.5s ease-in-out', border: '10px solid green', borderOpacity: '0.5' }} />
    </div>
  );
};

export default Cook;
