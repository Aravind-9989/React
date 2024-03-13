
import { Typography,Rating } from "@mui/material";
import { useState } from "react";



function Tablem(){
  const[value,setValue]=useState(0)
    return(
        <>
 <Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Typography component="legend">Read only</Typography>
<Rating name="read-only" value={value} readOnly />
<Typography component="legend">Disabled</Typography>
<Rating name="disabled" value={value} disabled />
<Typography component="legend">No rating given</Typography>
<Rating name="no-value" value={null} />
        </>
    )
}
export default Tablem