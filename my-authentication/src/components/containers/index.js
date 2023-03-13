import { Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../Login'
import SignUp from '../SignUp'

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };






  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper  elevation= {20} style={{margin: '20px auto', width: 340}}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab style={{ width: 170, fontWeight: "bold"}} label="Sign in" />
        
        <Tab style={{ width: 170, fontWeight: "bold"}} label="Sign up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp handleChange={handleChange}/>
      </TabPanel>
    </Paper>
  );
};

export default SignInOutContainer;
