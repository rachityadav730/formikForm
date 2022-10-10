import React from 'react'
import { Field, Form, Formik, FormikProps } from 'formik';
import Button from 'react-bootstrap/Button';
const SignInForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
  return (
    <>
    <h1 style={{width:"100%",textAlign:"initial",paddingLeft:"5%",marginBottom:"3%"}}>
        Sign in
    </h1>
    <>
    <form onSubmit={handleSubmit}>
            <lable style={{width:"100%",textAlign:"initial",paddingLeft:"5%",marginBottom:"3%"}}>
            Email or mobile phone number
            </lable>
            <br></br>
            <Field type= "email" name="Email" placeholder="" style={{width:"89%",marginBottom:"3%"}} />
            <br></br>
            <Button type='submit' style={{backgroundColor:"#e3a50d",border:"#e3a50d",color:"black",width:"89%"}}>Continue</Button>
    </form>

    <p style={{fontSize:"14px",merginLeft:"1%"}}>
    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
    </p>
    <p style={{fontSize:"14px",color:"#0066c0"}}>
    Need help?
    </p>
    </>
    </>
  )
}

export default SignInForm
