"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
export default function Home() {
  
  const [listItems, setListItems] = React.useState([]);
  const handleAction = (action, response) =>{
    console.log(action, response)
  }
  return (
    <>
    <div className="header">
    <AppBar position="static" sx={{backgroundColor:'white'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#f4717f"}}>
            Todo
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
    <TodoForm handleAction={handleAction}/>
    <TodoItem />


</>

  );
}