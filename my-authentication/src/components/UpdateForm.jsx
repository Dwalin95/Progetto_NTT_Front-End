import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Avatar,  TextField} from '@mui/material';

import Button from '@mui/material/Button';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import EditIcon from '@mui/icons-material/Edit';

import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import NavBar from './NavBar';

export const UpdateForm = () => {

    const navigate = useNavigate();
    const avatarStyle = { backgroundColor: "#182F5D" };
    const paperStyle = {
      padding: 20,
      height: "80vh",
      width: 300,
      margin: "0 auto",
      marginTop: "1%",
    };

    const initialValues = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: "",
        address: {
          city: "",
          country: "",
          postalCode: ""
        }
      };

      function navigazione() {
        navigate("/home");
      }

      const handleSubmit = (values) => {
        axios
          .post(
            "https://4901c10c-fb64-4785-a32c-e0e9119985c9.mock.pstmn.io/signup",
            {
              firstname: initialValues.firstname,
              lastname: initialValues.lastname,
              gender: initialValues.gender,
              username: initialValues.username,
              email: initialValues.email,
              password: initialValues.pass,
              confirmPassword: initialValues.confirmPassword,
              address: initialValues.address
    
            }
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            console.log(values)
            navigazione();
          })
          .catch((err) => console.error(err));
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Enter valid e-mail").required("Required"),
        password: Yup.string()
          .min(8, "Password minimum length should be 8")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Password not matched")
          .required("Required"),
          firstname: Yup.string().required("Required"),
          lastname: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          postalcode: Yup.string().required("Required"),
      
    
    
      });
  return (
   <><NavBar /><Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                  <Avatar style={avatarStyle}>
                      <EditIcon />
                  </Avatar>
                  <h2>Change Information</h2>
              </Grid>

              <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
              >
                  {(props) => (
                      <Form>
                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="firstname" />}
                              name="firstname"
                              style={{ marginTop: 10, marginRight: 4, width: 148 }}
                              id="outlined-basic"
                              label="First Name"
                              placeholder="Enter First Name "
                              variant="outlined" />

                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="lastname" />}
                              name="lastname"
                              style={{ marginTop: 10, width: 148 }}
                              id="outlined-basic"
                              label="Last Name"
                              placeholder="Enter Last Name "
                              variant="outlined" />




                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="country" />}
                              name="country"
                              style={{ marginTop: 10, marginRight: 4, width: 97 }}
                              id="outlined-basic"
                              label="Country"
                              placeholder="Enter Country "
                              variant="outlined" />
                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="city" />}
                              name="city"
                              style={{ marginTop: 10, width: 97 }}
                              id="outlined-basic"
                              label="City"
                              placeholder="Enter City "
                              variant="outlined" />
                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="postalcode" />}
                              name="postalcode"
                              style={{ marginTop: 10, marginLeft: 4, width: 97 }}
                              id="outlined-basic"
                              label="Postal Code"
                              placeholder="Enter Postal Code "
                              variant="outlined" />

                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="username" />}
                              name="username"
                              style={{ marginTop: 10, marginRight: 4, width: 148 }}
                              id="outlined-basic"
                              label="Username"
                              placeholder="Enter Username "
                              variant="outlined"
                              fullWidth />
                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="email" />}
                              name="email"
                              style={{ marginTop: 10, width: 148 }}
                              id="outlined-basic"
                              label="E-mail"
                              placeholder="Enter e-mail "
                              variant="outlined"
                              fullWidth />

                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="password" />}
                              name="password"
                              style={{ marginTop: 10, marginRight: 4, width: 148 }}
                              id="outlined-basic"
                              label="Password"
                              placeholder="Enter Password "
                              variant="outlined"
                              type="password" />

                          <Field
                              as={TextField}
                              helperText={<ErrorMessage name="confirmPassword" />}
                              name="confirmPassword"
                              style={{ marginTop: 10, width: 148 }}
                              id="outlined-basic"
                              label="Confirm Password"
                              placeholder="Enter Password "
                              variant="outlined"
                              type="password"
                              fullWidth />
                          <Button
                              style={{ marginTop: 12 }}
                              type="submit"
                              variant="contained"
                              disabled={props.isSubmitting}
                              fullWidth
                          >
                              {props.isSubmitting ? "Loading" : "Change Information"}
                          </Button>
                          <Button
                              style={{ marginTop: 12 }}
                              type="submit"
                              variant="outlined"
                              onClick={() => navigate(-1)}
                              fullWidth
                          >
                              Cancel
                          </Button>
                          


                      </Form>
                  )}
              </Formik>
          </Paper>
      </Grid></>
  )
}
export default UpdateForm;