import React from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book';
import {Link} from 'react-router-dom'
class SearchPage extends React.Component{
    state ={
        query :'',
        errorQuery :null,
        searchedBooks:[]
    }
    changeInput = (e) => {
        this.setState({query:e.target.value})
    }
    fetchDataFromApi = (query) => {
        query && BooksAPI.search(query) //checking query is not empty string 
        .then(data => !data.error ?
            this.setState({searchedBooks:this.checkBookIsPresent(data),errorQuery:null}):
            this.setState({errorQuery:data.error})
            )
    }

    checkBookIsPresent = (data) =>{
        let myBook = this.props.books.map(book => book.id)
        let newArray = [];
        if(!data.error){
            newArray = data.map(newBook => {
                return myBook.includes(newBook.id) ?
                 this.props.books.find((oldbook) => (oldbook.id === newBook.id)) : 
                 newBook;
        })
    }
    return newArray;
}

    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to = "/" ><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                 placeholder="Search by title or author"
                 value = {this.state.query}
                 onChange = {this.changeInput}
                 onKeyUp =  {()=>this.fetchDataFromApi(this.state.query)}
                 />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              {this.state.query && (!this.state.errorQuery ?
                  (this.state.searchedBooks.map(book =>
                    <Book key = {book.id}
                     book ={book}
                     updateBook = {this.props.updateBook}
                    />
                  )):<div>No books found with this term. Try again.</div>
              )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage