import { Description } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"

const RecipeDetails = () =>{

const recipes = useLoaderData();


    return <Grid item xs={4}>
        <Card sx={{marginBottom:3, width:"30%"}} variant="outlined">
            <Typography fontSize={25} sx={{border:"3px solid white", borderRadius:"3px 3px 0px 0px",
            textAlign:"center", backgroundColor:"green"}}>{recipes.name}</Typography>
            <CardContent sx={{display:"flex", flexDirection:"column", alignContent:"center",
            flexWrap:"wrap", background:"green"}}>
                <Typography>Descriptions: {recipes.decription}</Typography>
                <Typography>Steps: {recipes.steps}</Typography>
                <Typography>Time to prepare: {recipes.timeToPrepare}</Typography>
                <Typography>Expected yield: {recipes.expectedYield}</Typography>
            </CardContent>
        </Card>
    </Grid>
}

export default RecipeDetails;