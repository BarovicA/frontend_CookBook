import { Alert, Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";


const RecipeNew = () =>{

    const[name, setName] = useState("");
    const[decription, setDecription] = useState("");
    const[steps, setSteps] = useState("");
    const[timeToPrepare, setTimeToPrepare] = useState("");
    const[expectedYield, setExpectedYield] = useState("");
    // const[cook, setCook] = useState("");
    const[showAlert, setShowAlert] = useState(false);
    const[showError, setShowError] = useState(false);
    const[helperText, setHelperText] = useState("");
    const[helperText2, setHelperText2] = useState("");
    const[helperText3, setHelperText3] = useState("");
    const[helperText4, setHelperText4] = useState("");
    const[helperText5, setHelperText5] = useState("");

    const addNewRecipe = async()=>{
        try{
        let response = await fetch ('http://localhost:8080/api/v1/recipes/create',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                decription: decription,
                steps: steps,
                timeToPrepare: timeToPrepare,
                expectedYield: expectedYield
                // cook: [cook]
            }),
        });
        if(response.ok){
            let r = await response.json();
            console.log(JSON.stringify(r, null, 4));
            setShowAlert(true);
        } else{
            console.log("Neuspeh slanja");
        }
    } catch(error){
        alert("Nemate mogucnost da dodate");
        }
    }


    return <Container sx={{justifyContent:"center", alignContent:"center", flexWrap:"wrap", width:"80%", margin:3}}>
         
         <Box sx={{display:"flex", width:"100%", flexDirection:"column", alignItems:"end"}}>
         <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="name" 
         variant="outlined" type="text"
         onChange={
            (e)=>{
                if(e.target.value === ""){
                    setShowError(true);
                    setHelperText("Polje ne moze biti prazno");
                    setName(e.target.value);
                }else{
                        setShowError(false);
                        setHelperText("");
                        setName(e.target.value);
                    
                }
            }
         } 
         required
         error= {showError}
         helperText={helperText}
         />
         <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="decription" 
         variant="outlined" type="text"
         onChange={
            (e)=>{
                if(e.target.value === ""){
                    setShowError(true);
                    setHelperText2("Polje ne moze biti prazno");
                    setDecription(e.target.value);
                }else{
                        setShowError(false);
                        setHelperText2("");
                        setDecription(e.target.value);
                    
                }
            }
         } 
         required
         error= {showError}
         helperText2={helperText2}
         />
            <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="steps" 
         variant="outlined" type="text"
         onChange={
            (e)=>{
                if(e.target.value === ""){
                    setShowError(true);
                    setHelperText3("Polje ne moze biti prazno");
                    setSteps(e.target.value);
                }else{
                        setShowError(false);
                        setHelperText3("");
                        setSteps(e.target.value);
                    
                }
            }
         } 
         required
         error= {showError}
         setHelperText3={helperText3}
         />
            <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="time to prepare" 
         variant="outlined" type="number"
         onChange={
            (e)=>{
                if(e.target.value === ""){
                    setShowError(true);
                    setHelperText4("Polje ne moze biti prazno");
                    setTimeToPrepare(e.target.value);
                }else{
                        setShowError(false);
                        setHelperText4("");
                        setTimeToPrepare(e.target.value);
                    
                }
            }
         } 
         required
         error= {showError}
         helperText4={helperText4}
         />
            <TextField sx={{width:"100%", marginBottom:1, backgroundColor:"whitesmoke"}} id="outlined-basic" label="expected yield" 
         variant="outlined" type="text"
         onChange={
            (e)=>{
                if(e.target.value === ""){
                    setShowError(true);
                    setHelperText5("Polje ne moze biti prazno");
                    setExpectedYield(e.target.value);
                }else{
                        setShowError(false);
                        setHelperText5("");
                        setExpectedYield(e.target.value);
                    
                }
            }
         } 
         required
         error= {showError}
         helperText5={helperText5}
         />
         {showAlert &&<Alert sx={{width:"100%", marginBottom:4}} onClose={()=>{setShowAlert(false)}}>
            Novi recept je dodat
         </Alert>}
         <Button size="normal" variant="contained" sx={{backgroundColor:"blue"}}
         onClick={addNewRecipe}>Save</Button>
         </Box>
        </Container>
}


export default RecipeNew;