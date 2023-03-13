import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, Checkbox,  Link,  TextField, Typography } from '@mui/material';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Form,Field, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';



const Login = ({handleChange}) => {
  const navigate = useNavigate();
  const avatarStyle={backgroundColor: '#182F5D'}
  const paperStyle= {padding: 20, height: '75vh', width: 300, margin: "0 auto" , marginTop: "5%"}
  const initialValues={
    email: "",
    password: "",
    remember: false

  }


  function navigazione() {
    navigate("/home")

  }



  const handleSubmit = () => {
   
    axios.post("https://c1efba13-110c-4360-a39e-c8399697de08.mock.pstmn.io/login", {
        email: initialValues.email,
        password: initialValues.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigazione()
      })
      .catch((err) => console.error(err));
  };


// const onSubmit= (values,props)=>{
//   console.log(values)

//   setTimeout(()=>{
//     props.resetForm();
//     props.setSubmitting(false)
//   },2000)
  

// }

// const onSubmit = (values, { resetForm, setSubmitting }) => {
//   console.log(values)

//   setTimeout(() => {
//     resetForm();
//     setSubmitting(false);
//     navigazione()
//   }, 2000);
// }



const validationSchema=Yup.object().shape({
  email: Yup.string().email("Enter valid e-mail" ).required("Required"),
  password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
})


  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align= 'center'>
            <Avatar style={avatarStyle}><HttpsOutlinedIcon/></Avatar>
            <h2>Sign in</h2> 
            </Grid>
         <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form>
                 <Field as= {TextField}  helperText={<ErrorMessage name="email"/>} id="outlined-basic" label="E-mail" name='email'  placeholder= "Enter e-mail "variant="outlined" fullWidth />
            <Field as= {TextField}  helperText={<ErrorMessage name="password"/>} style={{marginTop: 12}} id="outlined-basic" label="Password" name='password'  placeholder= "Enter Password "variant="outlined" type= "password" fullWidth />
            <Field as ={FormControlLabel} style={{marginTop: 12}} name='remember' control={<Checkbox  />} label="Remember me" />
            <Button  style={{marginTop: 12}} type= 'submit' variant="contained" fullWidth>Sign In</Button>
            {/* <Button disabled={props.isSubmitting} style={{marginTop: 12}} type= 'submit' variant="contained" fullWidth>{props.isSubmitting? "Loading": "Sign In"}</Button> */}
            </Form>
          )}
         </Formik>
            <Typography  style={{marginTop: 12}} ><Link href='#'>Forgot Password ?</Link></Typography>
            <Typography style={{marginTop: 12}} >Don't have an account? <Link href= '#'  onClick={()=>handleChange("event", 1) }>Sign Up</Link></Typography>
        </Paper>
    </Grid>
  )
}

export default Login