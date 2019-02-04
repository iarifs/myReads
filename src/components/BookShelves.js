import React from 'react'
import Book from './Book'
class BookShelves extends React.Component{
    render(){
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.heading}</h2>
                     <div className="bookshelf-books">
                     <ol className="books-grid">
                     {
                         this.props.books.map(book => 
                         <Book key ={book.title}
                          book = {book}
                          updateBook = {this.props.updateBook}
                          />)
                     }</ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelves;