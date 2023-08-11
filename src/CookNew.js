import { Alert, Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";

const CookNew = () =>{

    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showAlert, setShowAlert] = useState(false);
    const[showError, setShowError] = useState(false);
    const[helperText, setHelperText] = useState("");
    const[helperText2, setHelperText2] = useState("");
    const[helperText3, setHelperText3] = useState("");
    const[helperText4, setHelperText4] = useState("");


    const addNewCook = async()=>{
        try{
        let response = await fetch ('http://localhost:8080/api/v1/cookUser',{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password
            })
    });
    if(response.ok){
        let r = await response.json();
        console.log(JSON.stringify(r, null, 4));
        setShowAlert(true);
     } else {
        console.log("Neuspeh slanja");
        }
    }catch(error){
        alert("Nemate mogucnost da dodate")
    }
}

return <Container sx={{justifyContent:"center", alignContent:"center", flexWrap:"wrap", width:"80%", margin:3}}>
         
         <Box sx={{display:"flex", width:"100%", flexDirection:"column", alignItems:"end"}}>
         <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="firstname" 
         variant="outlined" type="text"
         onChange={
            (e)=>{
                if(e.target.value === ""){
                    setShowError(true);
                    setHelperText("Polje ne moze biti prazno");
                    setFirstname(e.target.value);
                }else{
                        setShowError(false);
                        setHelperText("");
                        setFirstname(e.target.value);
                    
                }
            }
         } 
         required
         error= {showError}
         helperText={helperText}
         />
         <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="lastname" 
         variant="outlined" type="text"
         onChange={
            (e)=>{
                if(e.target.value === ""){
                    setShowError(true);
                    setHelperText2("Polje ne moze biti prazno");
                    setLastname(e.target.value);
                }else{
                        setShowError(false);
                        setHelperText2("");
                        setLastname(e.target.value);
                    
                }
            }
         } 
         required
         error= {showError}
         helperText2={helperText2}
         />
            <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="username" 
         variant="outlined" type="text"
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
            <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="password" 
         variant="outlined" type="password"
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
         {showAlert &&<Alert sx={{width:"100%", marginBottom:4}} onClose={()=>{setShowAlert(false)}}>
            Novi kuvar je dodat
         </Alert>}
         <Button size="normal" variant="contained" sx={{backgroundColor:"blue"}}
         onClick={addNewCook}>Save</Button>
         </Box>
         </Container>
}

export default CookNew;