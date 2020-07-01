import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks : []
  }

  componentDidMount(){
    this.getAllBooks()
  }

  getAllBooks(){
    BooksAPI.getAll()
      .then((books)=> {
        this.setState(() => ({
          books
        }))
      })
  }

  handleChangeCategory = choice => {
    BooksAPI.update(choice[0], choice[1])
      .then(()=>{
        this.getAllBooks(); 
      }
      )
  }

  handleSearchBook = query => {
    const books = BooksAPI.search(query.trim())
    books.then((res) => {
        this.setState(() => ({
          searchedBooks: res
        }))
      })
        .catch(() => {
          return 'Request failed'
        })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=> (
          <ListBooks 
            books={this.state.books} 
            handleChangeCategory={(choice) => this.handleChangeCategory(choice)}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBook 
            books={this.state.books}
            handleChangeCategory={(choice) => this.handleChangeCategory(choice)}
            handleSearchBook={(query) => this.handleSearchBook(query)}
            searchedBooks={this.state.searchedBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
