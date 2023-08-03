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
import Box from '@mui/material/Box';
import ingredientImage from './ingredient.jpg';

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
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  dialogContent: {
    padding: '20px',
    backgroundImage: `url(${ingredientImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    height: '100%'
  },
  img: {
    height: '100%'
  }
};

const Ingredients = () => {
  const [open, setOpen] = React.useState(false);

  const ingredientsData = [
    {
      name: 'Jaja',
      unit: 'komad',
      nutritionalValue: 'Bogato proteinima i mastima',
      calories: 78,
      saturatedFat: '2.7g',
      fat: '5.4g',
      protein: '6.3g',
      allergens: 'Mleko, soja',
    },
    {
      name: 'Brašno',
      unit: 'gram',
      nutritionalValue: 'Izvor ugljenih hidrata',
      calories: 364,
      saturatedFat: '0.4g',
      fat: '1.2g',
      protein: '10.3g',
      allergens: 'Pšenica, gluten',
    },
   
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
        Pregledaj sastojke
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sastav namirnice</DialogTitle>
        <DialogContent sx={useStyles.dialogContent}>
          <TableContainer>
            <Table>
              <TableBody>
                {ingredientsData.map((ingredient, index) => (
                  <React.Fragment key={index}>
                    <TableRow>
                      <TableCell
                        className={useStyles.tableHeader}
                        component="th"
                        scope="row"
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        {ingredient.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={useStyles.tableCell}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <Box borderRadius="5px" p={1}>
                          Jedinice mere: {ingredient.unit}
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={useStyles.tableCell}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <Box borderRadius="5px" p={1}>
                          Hranjivost: {ingredient.nutritionalValue}
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={useStyles.tableCell}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <Box borderRadius="5px" p={1}>
                          Broj kalorija: {ingredient.calories}
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={useStyles.tableCell}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <Box borderRadius="5px" p={1}>
                          Grami masti: {ingredient.fat} (Od toga zasićenih: {ingredient.saturatedFat})
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={useStyles.tableCell}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <Box borderRadius="5px" p={1}>
                          Grami proteina: {ingredient.protein}
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={useStyles.tableCell}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <Box borderRadius="5px" p={1}>
                          Alergeni: {ingredient.allergens}
                        </Box>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Zatvori
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Ingredients;
