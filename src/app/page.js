"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
export default function Home() {
  
  const [listItems, setListItems] = React.useState([]);

  const handleAction = (action, response) => {
    if(action == 'add'){
      console.log(response);
      setListItems([...listItems, response])
    }if(action === 'delete'){
      let key = response;
      setListItems(listItems.filter(item =>item.id !== key));
    }
    console.log(listItems);
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
    <TodoForm onFormSubmit={handleAction} />
    
    {listItems.map((item, index) => (
       <TodoItem task={item} key={index} id={index} onDelete={handleAction} />
    ))}
    


    


</>

  );
}