import React from 'react'

import Book from './Book'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));

const BookShelf = props => {
    const classes = useStyles();

    const filterBooksByShelf = (books, shelf) =>{
        return books.filter(book => book.shelf === shelf)
    }

    return(
        <div className='book-shelf'>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}><b>{props.shelfTitle}</b></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {filterBooksByShelf(props.books, props.shelf).map((book) =>
                        <ol key={book.title}>
                            <Book 
                                books={props.books}
                                book={book} 
                                category={props.shelfTitle} 
                                onChangeCategory={(choice) => props.handleChangeCategory(choice)}
                            />
                        </ol>
                    )}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <br></br>
        </div>
    )
}

BookShelf.propTypes = {
    handleChangeCategory: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default BookShelf;