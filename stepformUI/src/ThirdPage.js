import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const  ThirdPage=()=> {
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
          id="account"
          label="Account no"
          size="small"
          
        />
         <TextField
          id="ifsccode"
          label="IFSC Code"
          size="small"
        />
        

        
      </div>
      
    
    </Box>
  );
}