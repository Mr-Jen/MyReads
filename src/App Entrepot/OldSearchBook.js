import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

    /*clearQuery = () => {
        this.updateQuery('')
    }*/

    containsAuthors(authors, query) {
        for(const author of authors){
            if(author.toLowerCase().includes(query.toLowerCase())){
                return true
            }
        }
    }

    render(){
        const { query } = this.state;
        const { books } = this.props;

        const showingBooks = query === ''
            ? books
            : books.filter((c) => (
                c.title.toLowerCase().includes(query.toLowerCase()) || this.containsAuthors(c.authors, query)
              ))

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
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div style={{marginTop: 80, marginLeft: 30, marginBottom: -50, border: 1}} className='show-input'>
                    <p>
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
                        {showingBooks.map((book) =>
                            <ol key={book.title}>
                                <Book 
                                    book={book} 
                                    onChangeCategory={(choice) => this.props.handleChangeCategory(choice)}
                                    marginBot={20}
                                />
                            </ol>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;