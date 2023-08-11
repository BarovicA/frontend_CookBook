import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const CookDetails = () =>{

    const cooks = useLoaderData();

    return <Grid item xs={4}>
        <Card sx={{marginBottom:3, width:"30%"}} variant="outlined">
            <Typography fontSize={25} sx={{border:"3px solid white", borderRadius:"3px 3px 0px 0px", 
            textAlign:"center", backgroundColor:"green"}}>{cooks.username}</Typography>
            <CardContent sx={{display:"flex", flexDirection:"column", alignContent:"center",
            flexWrap:"wrap", backgroundColor:"green"}}>
                <Typography>Firstname:{cooks.firstName}</Typography>
                <Typography>Lastname:{cooks.lastName}</Typography>
            </CardContent>
        </Card>
    </Grid>

}
export default CookDetails;