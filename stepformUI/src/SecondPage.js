import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const  SecondPage=()=> {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:'flex',flexDirection:'column'}}>
        <TextField
           width = "fullWidth"
          id="First Name"
          label="First Name"
          size="small"

          
        />
         <TextField
          id="Last Name"
          label="Last Name"
          size="small"
        />
         <TextField
          id="age"
          label="Age"
          size="small"
        />
        <TextField
          id="phone"
          label="Phone"
          size="small"
        />

        
      </div>
      
    
    </Box>
  );
}