import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Field, Form, Formik, FormikProps } from 'formik';
const FormikForm =(props) =>{

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      console.log("allprops12434132",props)
      return (

        <>
        <form onSubmit={handleSubmit}>
            <Table striped bordered hover variant="dark">
            <thead>
            <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Batch No</th>
            <th>Serial No</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
            <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
          />
            </td>
            <td>
            <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.batch_no}
            name="batch_no"
          />
            </td>
            <td>
            <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.serial_no}
            name="serial_no"
          />
            </td>
            <td>

            <Field type="date" name="expiry_date" placeholder="expiry_date" />
        
            </td>
          </tr>
          
        </tbody>
  
        
        </Table>
            <Button type="submit" variant="success">Submit</Button>
        </form>
        </>
      );
}



export default FormikForm