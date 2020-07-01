import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ListBooks extends Component {
    render(){
        const useStyles = makeStyles((theme) => ({
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: theme.spacing(2),
            },
            title: {
              flexGrow: 1,
            },
        }));

        return(
            <div>
                <div className={useStyles.root}>
                    <AppBar position='fixed'>
                    <Toolbar>
                        <Typography variant="h5" className={useStyles.title}>
                            MyReads
                        </Typography>
                        <Link style={{position: "absolute", marginLeft: '70%'}} to='/search'>
                        <Button variant="contained" color="primary">
                            - Add Book Here -
                        </Button>
                        </Link>
                    </Toolbar>
                    </AppBar>
                </div>

                <div className="list-books-content">
                    <br/><br/><br/>
                    <BookShelf 
                        handleChangeCategory = {(choice) => {this.props.handleChangeCategory(choice)}} 
                        books={this.props.books} shelfTitle='Currently Reading' shelf='currentlyReading'
                    />
                    <BookShelf 
                        handleChangeCategory = {(choice) => {this.props.handleChangeCategory(choice)}} 
                        books={this.props.books} shelfTitle='Want To Read' shelf='wantToRead'
                    />
                    <BookShelf 
                        handleChangeCategory = {(choice) => {this.props.handleChangeCategory(choice)}} 
                        books={this.props.books} shelfTitle='Read' shelf='read'
                    />
                </div>
            </div>
        )
    }
}

ListBooks.propTypes = {
     books: PropTypes.array.isRequired,
     handleChangeCategory: PropTypes.func.isRequired   
}

export default ListBooks;