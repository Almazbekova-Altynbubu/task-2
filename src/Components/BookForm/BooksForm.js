import { useState } from "react";
import "./BooksForm.css"

function BooksForm(props){
const[bookName,setBookName]=useState("")
const[price,setPrise]=useState("")
const[date,setDate]=useState("")


    const bookNameValueHandle=(event)=>{
console.log(event.target.value);
setBookName(event.target.value)
    }

    const priceValueHandle=(e)=>{
        setPrise(e.target.value)
        console.log(e.target.value);
    }

    const dateValueHandle=(e)=>{
        setDate(e.target.value)
    }

const saveDataHandle=()=>{
    const data ="TEXT"
    props.onGetData(data)
}

    return(
<div className="form">
 <label  className="form_name"  htmlFor="">BookName</label>
 <input onChange={bookNameValueHandle} type="text" placeholder="Book Name" className="from--input" />
 <label className="form_name" htmlFor="">Price</label>
 <input onChange={priceValueHandle} type="text" placeholder="Price" className="from--input"/>
 <label className="form_name" htmlFor="">Date</label>
 <input onChange={dateValueHandle} type="date"placeholder="Date" className="from--input"/>
<button onClick={saveDataHandle}>Add</button>
</div>
    )
}
export default BooksForm