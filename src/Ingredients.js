import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

const useStyles = {
  ingredientsButton: {
    marginTop: '16px',
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  tableCell: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const Ingredients = () => {
  const [open, setOpen] = React.useState(false);

  const ingredientsData = [
    {
      name: 'Ime namirnice',
      unit: 'komad',
      nutritionalValue: 'Bogato proteinima i mastima',
      calories: 78,
      saturatedFat: '2.7g',
      fat: '5.4g',
      protein: '6.3g',
      allergens: 'Mleko, soja',
    }
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={useStyles.ingredientsButton}
        onClick={handleOpen}
      >
        Ingredient modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sastav namirnice</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableBody>
                {ingredientsData.map((ingredient, index) => (
                  <React.Fragment key={index}>
                    <TableRow>
                      <TableCell className={useStyles.tableHeader} component="th" scope="row">
                        {ingredient.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jedinice mere: {ingredient.unit}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Hranjivost: {ingredient.nutritionalValue}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Broj kalorija: {ingredient.calories}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={useStyles.tableCell}>
                        Grami masti: {ingredient.fat}
                          (Od toga zasićenih: {ingredient.saturatedFat})
                        <Typography component="span">
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Grami proteina: {ingredient.protein}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Alergeni: {ingredient.allergens}</TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Ingredients;
