import React from 'react'
import { Card, CardTitle, CardText, Button, ButtonGroup } from 'reactstrap'

/*
book name
book author
quantity
price
date
*/

// "id": "1",
// "isbn": 9780415924986,
// "lang": "eng",
// "year": 2003,
// "title": "A world history of tax rebellions",
// "img": "https://loremflickr.com/640/480/people",
// "author": "Burg, David F.",
// "publisher": "Routledge",
// "publisher_city": "New York",
// "physical_description": "XXXIV, 502 p.",
// "archived": false,
// "favorite": false,
// "currently_reading": false,
// "finished_reading": false,
// "want_to_read": false

export default function Book({name, author, quantity, price, date}) {
  return (
    <Card body className="my-2" style={{width: '18rem'}}>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>Author: {author}</CardText>
        <CardText>Quantity: {quantity}</CardText>
        <CardText>Price: {price}</CardText>
        <CardText>Date: {date}</CardText>
        <ButtonGroup>
            <Button color="primary">Edit</Button>
            <Button color="danger">Delete</Button>
            <Button><i className='fa fa-car'></i></Button>
            <Button><i className="fa fa-trash"></i></Button>
        </ButtonGroup>
    </Card>
  )
}
