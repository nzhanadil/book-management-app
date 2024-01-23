import React from 'react'
import { Formik } from 'formik'

export default function CreateBook() {
  return (
    <Formik
        initialValues = {{
            name: '',
            author: '',
            quantity: 0,
            price: 0
        }}
    >
        {(props) => (
        <form className='form'>
            <h6>Book Name</h6>
            <input name="name" value={props.values.name} placeholder='Name' onChange={props.handleChange}/>
            <h6>Book Author</h6>
            <input name="author" value={props.values.author} placeholder='Author' onChange={props.handleChange}/>
            <h6>Quantity</h6>
            <input name="quantity" value={props.values.quantity} placeholder='Quantity' onChange={props.handleChange}/>
            <h6>Book Price</h6>
            <input name="price" value={props.values.price} placeholder='Price' onChange={props.handleChange}/>
        </form>
        )}  
    </Formik>
  )
}
