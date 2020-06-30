import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books: []
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
    console.log('Inside App.js Changed to: ', choice[1])
    console.log(choice[0])
    BooksAPI.update(choice[0], choice[1])
      .then(()=>{
        this.getAllBooks(); 
      }
      )
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=> (
          <ListBooks books={this.state.books} handleChangeCategory={(choice) => this.handleChangeCategory(choice)}/>
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBook/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
