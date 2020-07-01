import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Book = props => {
    //console.log('Inside Book.js', props)
    const book  = props.book
    
    const handleChange = (e) => {
        e.preventDefault()
        const choice = [book, e.target.value]
        if(props.onChangeCategory){
            props.onChangeCategory(choice)
        }
    }

    const generatedId = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }


    return(
        <div>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        {
                            book !== undefined
                            ? 
                            <div className="book">
                                <Card style={{width: 150, height: 350}}>
                                    <div style={{marginBottom: props.marginBot}} className='change-category'>
                                        <FormControl style={{marginLeft: 5, marginRight: 5, width: 100, color:'red'}}>
                                            <InputLabel id="demo-simple-select-label"><b>Change Category</b></InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={props.category}
                                                onChange={handleChange}
                                            >
                                                {book.shelf === 'currentlyReading' 
                                                    ? <MenuItem value={'currentlyReading'}><b>Currently Reading</b></MenuItem>
                                                    : <MenuItem value={'currentlyReading'}>Currently Reading</MenuItem>
                                                }
                                                {book.shelf === 'wantToRead' 
                                                    ? <MenuItem value={'wantToRead'}><b>Want To Read</b></MenuItem>
                                                    : <MenuItem value={'wantToRead'}>Want to Read</MenuItem>
                                                }
                                                {book.shelf === 'read' 
                                                    ? <MenuItem value={'read'}><b>Read</b></MenuItem>
                                                    : <MenuItem value={'read'}>Read</MenuItem>
                                                }
                                                {props.insideListBooks && <MenuItem value={'noShelf'}>Remove</MenuItem>}                         
                                                                                          
                                            </Select>
                                        </FormControl>
                                    </div>
                                    {book.imageLinks ? 
                                        <CardContent style={{ width: 128, height: 180, backgroundImage: `url("${book.imageLinks.smallThumbnail}")`}}/>
                                        :<p>No Image</p>
                                    }
                                    
                                    <div style={{marginLeft: 5, marginRight: 5, marginBottom: 2}} className="book-title">
                                        <b>{book.title}</b>
                                    </div>
                                    <div style={{marginLeft: 5, marginRight: 5}} className="book-authors">
                                        {book.authors ?
                                            book.authors.map(author => (
                                            <p style={{marginBottom: -2, marginTop: -1}} key={generatedId()}>{author}</p>
                                        ))
                                            : <p>No authors known</p>
                                    }
                                    </div>
                                </Card>
                            </div>
                            : <p style={{color:'white'}}>Nothing to see here</p>
                        }
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Book;