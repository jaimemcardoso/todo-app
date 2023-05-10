"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
function valuetext(value) {
  return `${value}°C`;
}

export default function TodoForm(props) {
const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
const [inputValue, setInputValue] = React.useState('');
const [priority, setPriority] = React.useState(3);
const [buttonText, setButtonText] = React.useState("Add");
const [editable, setEditable] = React.useState(true)

useEffect(() => {
  if(props.editableItem){
    console.log(props.editableItem)
    setButtonText('Edit')
    setInputValue(props.editableItem.task);
    setPriority(props.editableItem.priority);
    setIsButtonDisabled(false);
    setEditable(false);
    
}else{
    setButtonText('Add')
}

}, [props.editableItem])

    const sendToParent = () => {
        console.log(props)
        let res = {task: inputValue, priority: priority, id:Date.now()}
        props.onFormSubmit("add",res)
        setPriority(3);
        setInputValue('');
        setIsButtonDisabled(true)
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if(event.target.value.length > 10){
            setIsButtonDisabled(false)
        }else{
            setIsButtonDisabled(true);
        }
      }

      const handleSliderChange = (event) => {
        setPriority(event.target.value);
      }

      const cancelEdit = () =>{
        setButtonText('Add')
        setInputValue("");
        setPriority(3);
        setIsButtonDisabled(true);
        setEditable(true)
      }

  return (
    <>
    <Card sx={{width:350, margin:'auto',mt:'20px', p:'20px'}} >
    <Box 
    sx={{ width: 250, margin:'auto', textAlign:'center'}}>
        <Typography gutterBottom sx={{mb:'-5px', textAlign:'left'}}>Priority</Typography>
      <Slider
        value={priority}
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        step={1}
        marks
        min={1}
        max={5}
        sx={{color: '#f4717f'}}
      />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={inputValue}
        onChange={handleInputChange} />
        <Button variant="contained" sx={{backgroundColor:'gray', m:1}} onClick={sendToParent} disabled={isButtonDisabled}>{buttonText}</Button>
        {!editable &&  <Button variant="contained" sx={{backgroundColor:'gray', m:1}} onClick={cancelEdit} disabled={editable}>Cancel</Button> }
       

    </Box>

 




    
    </Card>


    </>


  );
}