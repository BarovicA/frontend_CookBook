import { Alert, Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CookEdit = () =>{

    const cooks = useLoaderData();

    const[firstName, setFirstName] = useState(cooks.firstName);
    const[lastName, setLastName] = useState(cooks.lastName);
    const[username, setUsername] = useState(cooks.username);
    const[password, setPassword] = useState(cooks.password);
    const[showAlert, setShowAlert] = useState(false);
    const[showError, setShowError] = useState(false);
    const[helperText, setHelperText] = useState("");
    const[helperText2, setHelperText2] = useState("");
    const[helperText3, setHelperText3] = useState("");
    const[helperText4, setHelperText4] = useState("");

    const submitForm =async () =>{
        let response = await fetch (`http://localhost:8080/api/v1/cookUser/${cooks.id}`,
        {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }),
        });
        if(response.ok){
            let d = await response.json();
            console.log(JSON.stringify(d, null, 4));
            setShowAlert(true);
        }else{
            console.log("Neuspeh slanja");
        }
    
    }

    return <Container sx={{justifyContent:"center", alignContent:"center", flexWrap:"wrap", width:"80%"}}>
    <Box sx={{display:"flex", width:"100%", flexDirection:"column", alignItems:"end"}}>
    <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic"
    label="username" variant="outlined" type="text" value={firstName}
    onChange={
        (e)=>{
            if(e.target.value === ""){
                setShowError(true);
                setHelperText("Polje ne moze biti prazno");
                setFirstName(e.target.value);
            }else{
                    setShowError(false);
                    setHelperText("");
                    setFirstName(e.target.value);
                
            }
        }
     } 
     required
     error= {showError}
     helperText={helperText}
     />
     <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic"
    label="decription" variant="outlined" type="text" value={lastName}
    onChange={
        (e)=>{
            if(e.target.value === ""){
                setShowError(true);
                setHelperText2("Polje ne moze biti prazno");
                setLastName(e.target.value);
            }else{
                    setShowError(false);
                    setHelperText2("");
                    setLastName(e.target.value);
                
            }
        }
     } 
     required
     error= {showError}
     helperText2={helperText2}
     />
         <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic"
    label="steps" variant="outlined" type="text" value={username}
    onChange={
        (e)=>{
            if(e.target.value === ""){
                setShowError(true);
                setHelperText3("Polje ne moze biti prazno");
                setUsername(e.target.value);
            }else{
                    setShowError(false);
                    setHelperText3("");
                    setUsername(e.target.value);
                
            }
        }
     } 
     required
     error= {showError}
     setHelperText3={helperText3}
     />
              <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic"
    label="time to prepare" variant="outlined" type="text" value={password}
    onChange={
        (e)=>{
            if(e.target.value === ""){
                setShowError(true);
                setHelperText4("Polje ne moze biti prazno");
                setPassword(e.target.value);
            }else{
                    setShowError(false);
                    setHelperText4("");
                    setPassword(e.target.value);
                
            }
        }
     } 
     required
     error= {showError}
     helperText4={helperText4}
     />

     {showAlert && <Alert sx={{width:"100%", marginBottom:2}} onClose={()=>{setShowAlert(false)}}>
        Uspesno izmenjen kuvar</Alert>}
        <Button variant="outlined" sx={{backgroundColor:"green", color:"black"}}
        onClick={submitForm}>Update</Button>
    </Box>

</Container>
}
export default CookEdit;