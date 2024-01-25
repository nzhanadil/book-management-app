import React from 'react'
import Book from './Book'
import {useLocation} from 'react-router-dom'

export default function Books({books}) {
  
  const {pathname} = useLocation()
  

  return (
    <div>
      {books.map(book => {
        return book[pathname.slice(1)] && <Book {...book} key={book.id}/>        
      })}

    </div>
  )
}
