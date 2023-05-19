import React from 'react'
import BooksForm from '../BookForm/BooksForm'
import RenderBooks from "../RenderBooks/RenderBooks"


const Books = (props) => {
  // const {books} = props
  //   console.log(books);


  const getData=(data)=>{
console.log(data);
  }
  return (
    <div>
      <BooksForm onGetData={getData}/>
      {props.books.map((el)=>(
 <RenderBooks key={el.bookName} bookName={el.bookName}  price={el.price}  date={el.date}/>
 ))}
    </div>
  )
}

export default Books
