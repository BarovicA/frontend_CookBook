import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Cook = ({ onHomeClick }) => {
<<<<<<< Updated upstream
=======

// const[cooks, setCooks] = useState([]);

//   useEffect(() =>{
//     let ignore = false;
//     const fetchCooks = async ()=>{
//       let r = await fetch("http://localhost:8080/api/v1/cookUser");
//       let rr = await r.json();
//       if(!ignore){
//         setCooks(rr);
//       }
//     }
//     fetchCooks();
//     return()=>{
//       ignore = true;
//     }
//   }, []);

// console.log(cooks);

// const[search, setSearch] = useState("");
// const filterCook = cooks.filter((c)=>c.username.toLowerCase().includes(search.toLowerCase()));

>>>>>>> Stashed changes
  return (
    <div>
      <Typography variant="h2">Cook Panel</Typography>
      {}
      <Button onClick={onHomeClick} variant="contained" color="primary">
        Home
      </Button>
      <Button variant="contained" color="primary">
        Add Recipe
      </Button>
      <Button variant="contained" color="primary">
        Logout
      </Button>
    </div>
<<<<<<< Updated upstream
=======
    {/* <div>
    <TextField size='small' id='outlined-search' label="pretraga po usernam kuvara"
    type='search' sx={{backgroundColor:"whitesmoke"}}
    onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
    <Button size='normal' variant='contained' sx={{backgroundColor:"whitesmoke", color:"black"}}>Search</Button>
    {filterCook.map((c) => <CookShow cook={c}/>)}
    </div> */}
    </div>
>>>>>>> Stashed changes
  );
};

export default Cook;
