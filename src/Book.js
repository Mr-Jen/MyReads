import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Book = props => {
    //console.log('Inside Book.js', props)
    
    const handleChange = (e) => {
        e.preventDefault()
        const choice = [props.book, e.target.value]
        if(props.onChangeCategory){
            props.onChangeCategory(choice)
        }
    }


    return(
        <div>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <div className="book">
                            <Card style={{width: 128}}>
                                <div style={{marginBottom: 5}}>
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label"><b>Change Category</b></InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={props.category}
                                            onChange={handleChange}
                                        >
                                            {props.category === 'Currently Reading' 
                                                ? <MenuItem value={'currentlyReading'}><b>Currently Reading</b></MenuItem>
                                                : <MenuItem value={'currentlyReading'}>Currently Reading</MenuItem>
                                            }
                                            {props.category === 'Want To Read' 
                                                ? <MenuItem value={'wantToRead'}><b>Want To Read</b></MenuItem>
                                                : <MenuItem value={'wantToRead'}>Want to Read</MenuItem>
                                            }
                                            {props.category === 'Read' 
                                                ? <MenuItem value={'read'}><b>Read</b></MenuItem>
                                                : <MenuItem value={'read'}>Read</MenuItem>
                                            }                                            
                                        </Select>
                                    </FormControl>
                                </div>
                                <CardContent style={{ width: 128, height: 180, backgroundImage: `url("${props.book.imageLinks.smallThumbnail}")`}}>
                                </CardContent>
                                <div className="book-title">
                                    <b>{props.book.title}</b>
                                </div>
                                <div className="book-authors">
                                    {props.book.authors}
                                </div>
                            </Card>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Book;