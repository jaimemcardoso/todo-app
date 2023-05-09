"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem() {
    function handleEdit(){
        console.log('tes')
    }

    function handleDelete(){
        console.log('delete');
    }
  return (
    <>
    <Card sx={{width:350, margin:'auto',mt:'20px', p:'20px', display:'flex'}} >
    <Box sx={{margin:'auto', display: 'flex', flexDirection: 'row'}}>
    
    <div sx={{flex:2}}>
    <Typography gutterBottom sx={{mb:'-5px', textAlign:'left',  color:'#f4717f'}}>Priority: 1</Typography>
        <Typography gutterBottom sx={{mb:'-5px', textAlign:'left'}}> EXAMPLE TASK GOES HERE
    </Typography>
    </div>

  <div sx={{flex:1}}>        
  <IconButton sx={{ m:1, textAlign:'right'}}  onClick={handleEdit} >
        <EditIcon/>
    </IconButton>
    <IconButton sx={{ m:1, textAlign:'right'}} onClick={handleDelete}>
    <DeleteIcon />
    </IconButton>
    </div>
        
    </Box>

 




    
    </Card>

    </>


  );
}