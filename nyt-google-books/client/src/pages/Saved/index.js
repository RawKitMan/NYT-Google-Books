import React, { Component } from "react";
import RemoveBtn from "../../components/RemoveBtn";
import { List, ListItem } from "../../components/List";
import SavedAPI from "../../utils/SavedAPI";


//**************************Add this in later*************
/* methods for class
componentDidMount() {
    this.loadBooks();
};

loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    deleteBooks = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    };
*/


//FOr removebtn  onClick={() => this.deleteBook(book._id)

class Saved extends Component {

    state = {
        books: [],
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        SavedAPI.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    removeBook = id => {
        SavedAPI.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="jumbotron mt-5">
                <div className='row'>
                    <div className='col'>
                        {this.state.books.length ? (
                            <List>
                            {this.state.books.map((book, index) => {
                                return (
                                    <ListItem key={book._id} >
                                        <img src={book.image} alt= {book.title}></img>
                                        <strong>
                                            {book.title} by {book.authors.map(author => { return author + " " })}
                                        </strong>

                                        <p>{book.description}</p>
                                        <RemoveBtn onClick={() => this.removeBook(book._id)}/>
                                    </ListItem>
                                );
                            })}
                        </List>) : (<h3>No Results to Display</h3>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved;