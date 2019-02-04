import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from "./components/Home"
import SearchPage from './components/SearchPage';
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[],
  }
  componentDidMount (){
   this.getAll();
  }
  getAll = () =>{
    BooksAPI.getAll()
    .then(res => this.setState({books:res}))
  }
  updateBook = (book,shelf) =>{
    book.shelf = shelf;
    BooksAPI.update(book.id,shelf)
    .then(res =>
      this.setState(prevState =>({
        books:[book,...prevState.books.filter(oldbook => oldbook.id !== book.id )]
      }))
    )
  }
  render() {
    return (
      <div className="app">
            <Route exact path = "/" render ={()=>
            <Home books ={this.state.books}
            updateBook = {this.updateBook}/>}/>
            <Route exact path = "/search" render ={()=>
              <SearchPage updateBook = {this.updateBook}
              books = {this.state.books}/>}/>
          </div>
    )
  }
}

export default BooksApp
