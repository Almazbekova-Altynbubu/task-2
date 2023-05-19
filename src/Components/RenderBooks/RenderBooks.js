import React from 'react'
import "./RenderBooks.css"

const RenderBooks = (props) => {
  const {bookName,price,date}=props
  return (
    <div className="render-books">
      <p>{bookName}</p>
      <p>{price}</p>
      <p>{date}</p>
    </div>
  )
}

export default RenderBooks
