import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import RecipeNew from './RecipeNew';

const Cook = ({ onHomeClick }) => {
  const [openAddRecipeModal, setOpenAddRecipeModal] = useState(false);

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
          onClick={() => setOpenAddRecipeModal(true)}
        >
          <NavLink to="add_new_recipe">Add Recipe</NavLink>
        </Button>
        <Button variant="contained" color="primary">
          Logout
        </Button>
      </div>

      <Dialog
        open={openAddRecipeModal}
        onClose={() => setOpenAddRecipeModal(false)}
      >
        <DialogTitle>Add New Recipe</DialogTitle>
        <DialogContent>
          <RecipeNew onClose={() => setOpenAddRecipeModal(false)} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenAddRecipeModal(false)}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cook;
