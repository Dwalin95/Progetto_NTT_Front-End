import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { Typography } from '@mui/material';

import NavBar from './NavBar';

const Homepage = () => {
    const [open, setOpen] = useState(true);
   
 
    
  return (


    <>
    <NavBar/>
    
    
    
    <Grid align='center'>
          <Collapse in={open}>
              <Alert style={{ margin: '20px', width: 250 }}
                  action={<IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"

                      onClick={() => {
                          setOpen(false);
                      } }
                  >
                      <CloseIcon fontSize="inherit" />
                  </IconButton>}
                  sx={{ mb: 2 }}
              >
                  <strong> You Logged</strong>
              </Alert>
          </Collapse>
      </Grid>
      <Typography align='center' style={{fontWeight: 'bold' ,margin: '15px' ,color: '#064078'}} variant="h4" component="h3">
              Welcome to homepage
          </Typography></>

  )
}

export default Homepage