import  React from 'react'
import Header from './Header';
import {Link} from 'react-router-dom'
import BookShelves from './BookShelves';
class Home extends React.Component{
 
    render(){
  
        return(
            <div className="list-books">
            <Header/>
            <div className="list-books-content">
            <BookShelves heading = "Currently Reading"
             books = {this.props.books.filter(b => b.shelf === "currentlyReading")}
             updateBook = {this.props.updateBook}/>
            <BookShelves heading = "Want to Reading"
             books = {this.props.books.filter(b => b.shelf === "wantToRead")}     
             updateBook = {this.props.updateBook}/>
            <BookShelves heading = "Read"
             books = {this.props.books.filter(b => b.shelf === "read")}
             updateBook = {this.props.updateBook}/>
            </div>
            <div className="open-search">
              <Link to = "/search"><button >Add a book</button></Link>
            </div>
            </div>
        )
    }
}
export default Home