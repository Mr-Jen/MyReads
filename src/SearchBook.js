import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './SearchBook'

import Book from './Book'

class SearchBook extends Component {

    state = {
        query : ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
    }

    containsAuthors(authors, query) {
        for(const author of authors){
            if(author.toLowerCase().includes(query.toLowerCase())){
                return true
            }
        }
    }

    onChangeQuery = query => {
        this.updateQuery(query)
        query !== '' && this.props.handleSearchBook(query)
    }

    filterBooks(filteredBooks, listBooks){
        const res = []
        for(const filteredBook of filteredBooks){
            let added = false
            for(const listBook of listBooks){
                if(listBook.id === filteredBook.id){
                  res.push(listBook)
                  added = true  
                } 
            }
            !added && res.push(filteredBook)
        }
        return res
    }

    render(){
        const { query} = this.state;
        const books  = this.props.searchedBooks

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to='/'
                        className='add-contact'
                    ><button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            className='search-contacts'
                            type='text'
                            placeholder='Search by Author or Title'
                            value={query}
                            onChange={(event) => this.onChangeQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div style={{marginTop: 80, marginLeft: 30, marginBottom: -50, border: 1}} className='show-input'>
                    <p style={{color:'white'}}>
                        <b>
                            {'Searching for: '}
                            <i>
                                {query}
                            </i>
                        </b>
                    </p>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.error || query === ''
                            ?   <p style={{color:'white'}}>No books here yet</p>
                            :   this.filterBooks(this.props.searchedBooks, this.props.books).map((book) =>
                                    <ol key={book.id}>
                                        <Book 
                                            book={book} 
                                            books={this.props.books}
                                            category={'ALL'}
                                            onChangeCategory={(choice) => this.props.handleChangeCategory(choice)}
                                        />
                                    </ol>
                                    )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

SearchBook.propTypes = {
    books: PropTypes.array.isRequired,
    handleChangeCategory: PropTypes.func.isRequired,
    handleSearchBook: PropTypes.func.isRequired,
    searchedBooks: PropTypes.array.isRequired  
}

export default SearchBook;