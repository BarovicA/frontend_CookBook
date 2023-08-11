import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Modal({onCloseModal}){
    const[open, setOpen] = useState(false);

    const handleClickOpen = () =>{
        setOpen(true);
    }

    const handleClose = (closeModal) =>{
        onCloseModal(closeModal);
    }

    return <div>
        <Dialog
        open={true}
        onClose={()=>{handleClose(false)}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Delete cookuser"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id ="alert-dialog-description">
                    Are you sure you want to delete that cook user?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> {handleClose(true)}}>Yes</Button>
                <Button onClick={()=> {handleClose(false)}}>No</Button>
            </DialogActions>
            
        </Dialog>
    </div>
}