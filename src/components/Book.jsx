import React from 'react'
import { Card, CardTitle, CardText, Button, ButtonGroup, CardHeader } from 'reactstrap'

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

export default function Book({title, author, publisher, }) {
  return (
    <Card className="my-2" style={{width: '18rem'}}>
      <CardHeader>{title}</CardHeader>
      <CardText>Author: {author}</CardText>
      <CardText>Publisher: {publisher}</CardText>
    </Card>
  )
}
