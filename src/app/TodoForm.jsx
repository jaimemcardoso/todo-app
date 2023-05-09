"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function valuetext(value) {
  return `${value}°C`;
}

export default function TodoForm({handleAction}) {
const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
    const sendToParent = () => {
        handleAction("add", "test");
    }
  return (
    <>
    <Card sx={{width:350, margin:'auto',mt:'20px', p:'20px'}} >
    <Box 
    sx={{ width: 250, margin:'auto', textAlign:'center'}}>
        <Typography gutterBottom sx={{mb:'-5px', textAlign:'left'}}>Priority</Typography>
      <Slider
        defaultValue={3}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        label='test'
        step={1}
        marks
        min={1}
        max={5}
        sx={{color: '#f4717f'}}
      />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" sx={{backgroundColor:'gray', m:1}} onClick={sendToParent} disabled={isButtonDisabled}>Add</Button>
    </Box>

 




    
    </Card>


    </>


  );
}