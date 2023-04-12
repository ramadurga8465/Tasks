import React from 'react';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
       <Container>
        <Box sx={{ bgcolor: '#dfe7ee' }} style={{padding:"30px"}}>
        <HorizontalLinearStepper />
        </Box>
       
      </Container>
     
    </div>
  );
}

export default App;
