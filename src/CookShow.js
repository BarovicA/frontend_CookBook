import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CookModal from './CookModal.js'
import { Box, Card, CardContent, CardHeader, Container, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CookShow = ({cook}) =>{

const navigate = useNavigate();
const[showModal, setShowModal] = useState(false);
const[cookUserId, setCookUserId] = useState(null);

const handleDelete = async()=>{
    let result = await fetch (`http://localhost:8080/api/v1/cookUser/${cook.id}`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type":"application/json"
            }
        });
        if(!result.ok){
            alert("Brisanje nije uspelo")
        } else {
            window.location.reload(false);
        }
    }

    const handleCloseModal = (deleteSubject2) =>{
        if(deleteSubject2){
            handleDelete()
        }
        setShowModal(false);
    }
    
    return <Container sx={{display:"flex", flexDirection:"column", width:"50%",
    flexWrap:"wrap", marginBottom:2}}>
        {showModal && <CookModal onCloseModal={handleCloseModal}/>}
        <Card variant="outlined">
            <CardHeader subheader={cook.n} sx={{border:"3px solid whitesnake", borderRadius:"3px 3px 0px 0px",
            textAlign:"center", backgroundColor:"blue"}}/>
            <CardContent sx={{display:"flex", flexDirection:"column", alignContent:"center", flexWrap:"wrap",
            backgroundColor:"green"}}>
<<<<<<< Updated upstream
                <Typography>Username: {cook.username}</Typography>
            <Box>
=======
                <Typography>Name: {cook.username}</Typography>
            <Box>
                <InfoIcon sx={{cursor:"pointer"}} variant="outlined" onClick={()=>navigate(`/${cook.id}`)}>
                    Details
                </InfoIcon>
>>>>>>> Stashed changes
                <DeleteIcon sx={{cursor:"pointer"}} variant="outlined" onClick={()=>{setShowModal(true);
                setCookUserId(cook.id)}}>
                    Delete
                </DeleteIcon>
                <EditIcon sx={{cursor:"pointer"}} variant="outlined" onClick={()=>navigate(`/cookUser/update/${cook.id}`)}>
                    Edit Recipe
                </EditIcon>
            </Box>
            </CardContent>
        </Card>
  
    </Container>
}
export default CookShow;