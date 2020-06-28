import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class ListBooks extends Component {
    render(){
        return(
            <div>
                <h1>List books</h1>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        )
    }
}

export default ListBooks;