import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './components/Book';
import CreateBook from './components/CreateBook';
import { useEffect, useState } from 'react';
import fetchData from './utils/apiCalls/getData';
import { Spinner } from 'reactstrap';


function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [books, setBooks] = useState([])

  const fetchAndSetState = async () => {
    setIsLoading(true)
    setBooks(await fetchData())
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAndSetState()
  }, [])

  return (
    <div className="App">
      <h1>Book Management App</h1>
      <Book />

    </div>
  );
}

export default App;
