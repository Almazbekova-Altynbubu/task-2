import './App.css';
import Books from './Components/books/Books';

function App() {
const book = [
  {bookName:"Test-1",
   price: 500,
   date:"2022.4.12"
},
  {bookName:"Test-2",
   price: 500,
   date:"2022.4.12"
},
  {bookName:"Test-3",
   price: 500,
   date:"2022.4.12"
},
  {bookName:"Test-4",
   price: 500,
   date:"2022.4.12"
},

]



  return (
    <div className="App">
      <Books books={book}/>
    </div>
  );
}

export default App;
