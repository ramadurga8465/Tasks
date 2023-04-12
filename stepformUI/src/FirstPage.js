import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FirstPage() {
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
          id="name"
          label="Name"
          size="small"
          
        />
         <TextField
          id="mail"
          label="Mail ID"
          size="small"
        />
         <TextField
          id="password"
          label="Password"
          type="password"
          size="small"
        />

        
      </div>
      
    
    </Box>
  );
}