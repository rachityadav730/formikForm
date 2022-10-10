import React from 'react'
import FormikForm from './FormikForm'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import InitialValues from './const'
import { withFormik } from 'formik';
import SignInForm from './SignInForm'
const GoDownTable = (props)=>{
    console.log("allprops",props)
    return(
        <>
        <SignInForm {...props}/>
        </>
    )
}

const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ 
        name: '',
        batch_no:'',
        serial_no:'',
        expiry_date:''
     }),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.name) {
        errors.name = 'Required';
      }
  
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'BasicForm',
  })(GoDownTable);

export default MyEnhancedForm;