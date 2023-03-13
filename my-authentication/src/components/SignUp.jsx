import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, Link, TextField, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const SignUp = ({ handleChange }) => {
  const navigate = useNavigate();
  const avatarStyle = { backgroundColor: "#182F5D" };
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: 300,
    margin: "0 auto",
    marginTop: "5%",
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
  // const onSubmit= (values,props)=>{
  //   console.log(values)
  //   setTimeout(()=>{
  //       props.resetForm()
  //       props.setSubmitting(false)
  //   },2000)

  // }

  // const onSubmit = (values, { resetForm, setSubmitting }) => {
  //   console.log(values);

  //   setTimeout(() => {
  //     resetForm();
  //     setSubmitting(false);
  //     navigazione();
  //   }, 2000);
  // };

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
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2>Sign up</h2>
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
                variant="outlined"
              />

              <Field
                as={TextField}
                helperText={<ErrorMessage name="lastname" />}
                name="lastname"
                style={{ marginTop: 10, width: 148 }}
                id="outlined-basic"
                label="Last Name"
                placeholder="Enter Last Name "
                variant="outlined"
              />

              <FormLabel
                style={{ marginTop: 12, marginLeft: 2 }}
                id="demo-row-radio-buttons-group-label"
              >
                Gender
              </FormLabel>

              <Field
                as={RadioGroup}
                name="gender"
                style={{ marginLeft: 2 }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </Field>

           
              <Field
                as={TextField}
                helperText={<ErrorMessage name="country" />}
                name="country"
                style={{ marginTop: 10, marginRight: 4, width: 97 }}
                id="outlined-basic"
                label="Country"
                placeholder="Enter Country "
                variant="outlined"
              />
              <Field
                as={TextField}
                helperText={<ErrorMessage name="city" />}
                name="city"
                style={{ marginTop: 10, width: 97}}
                id="outlined-basic"
                label="City"
                placeholder="Enter City "
                variant="outlined"
              />
                 <Field
                as={TextField}
                helperText={<ErrorMessage name="postalcode" />}
                name="postalcode"
                style={{ marginTop: 10,marginLeft: 4, width: 97 }}
                id="outlined-basic"
                label="Postal Code"
                placeholder="Enter Postal Code "
                variant="outlined"
              />

              <Field
                as={TextField}
                helperText={<ErrorMessage name="username" />}
                name="username"
                style={{ marginTop: 10, marginRight: 4, width: 148 }}
                id="outlined-basic"
                label="Username"
                placeholder="Enter Username "
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                helperText={<ErrorMessage name="email" />}
                name="email"
                style={{ marginTop: 10, width: 148 }}
                id="outlined-basic"
                label="E-mail"
                placeholder="Enter e-mail "
                variant="outlined"
                fullWidth
              />

              <Field
                as={TextField}
                helperText={<ErrorMessage name="password" />}
                name="password"
                style={{ marginTop: 10, marginRight: 4, width: 148 }}
                id="outlined-basic"
                label="Password"
                placeholder="Enter Password "
                variant="outlined"
                type="password"
              />

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
                fullWidth
              />
              <Button
                style={{ marginTop: 12 }}
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Sign Up"}
              </Button>
              <Typography style={{ marginTop: 12 }}>
                Do you have an account?{" "}
                <Link href="#" onClick={() => handleChange("event", 0)}>
                  Sign In
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
