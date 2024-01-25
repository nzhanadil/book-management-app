import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './components/Book';
import CreateBook from './components/CreateBook';
import { useEffect, useState } from 'react';
import fetchData from './utils/apiCalls/getData';
import { Spinner } from 'reactstrap';
import Categories from './components/Categories';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Books from './components/Books';


function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [books, setBooks] = useState([])
  

  const fetchAndSetState = async () => {
    setIsLoading(true)
    setBooks(await fetchData())
    setIsLoading(false)
  }

  useEffect(() => {
    setActiveCategory(pathname)
    fetchAndSetState()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Book Management App</h1>
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>


        
        <Routes>
            <Route path={pathname} element={<Books books={books} activeCategory/>} />
        </Routes>
        
        

      </div>
    </BrowserRouter>
  );
}

export default App;
