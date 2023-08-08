import { Box, Card, CardContent, CardHeader, Container, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import Modal from './Modal.js'



const RecipeShow = ({recipe}) =>{

    const navigate = useNavigate();
    const[showModal, setShowModal] = useState(false);
    const[recipeId, setRecipeId] = useState(null);
    

    const handleDelete = async ()=>{
        let result = await fetch (`http://localhost:8080/api/v1/recipes/${recipe.id}`,
        {
        method: "DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    });
    if(!result.ok){
        alert("Brisanje nije uspelo")
    } else{
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
        {showModal && <Modal onCloseModal={handleCloseModal}/>}
        <Card variant="outlined">
            <CardHeader subheader={recipe.name} sx={{border:"3px solid whitesnake", borderRadius:"3px 3px 0px 0px",
            textAlign:"center", backgroundColor:"blue"}}/>
            <CardContent sx={{display:"flex", flexDirection:"column", alignContent:"center", flexWrap:"wrap",
            backgroundColor:"green"}}>
                <Typography>Name: {recipe.name}</Typography>
            <Box>
                <InfoIcon sx={{cursor:"pointer"}} variant="outlined" onClick={()=>navigate(`/${recipe.id}`)}>
                    Details
                </InfoIcon>
                <DeleteIcon sx={{cursor:"pointer"}} variant="outlined" onClick={()=>{setShowModal(true);
                setRecipeId(recipe.id)}}>
                    Delete
                </DeleteIcon>
                <EditIcon sx={{cursor:"pointer"}} variant="outlined" onClick={()=>navigate(`/recipes/update/${recipe.id}`)}>
                    Edit Recipe
                </EditIcon>
            </Box>
            </CardContent>
        </Card>
  
    </Container>
}

export default RecipeShow;