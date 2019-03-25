import React, { Component } from "react";
import RemoveBtn from "../../components/RemoveBtn";
import { List, ListItem } from "../../components/List";
import SavedAPI from "../../utils/SavedAPI";


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
            .then(res => {console.log(res.data); this.setState({ books: res.data })})
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
                                {this.state.books.map((book) => {
                                    return (
                                        <ListItem key={book._id} >
                                            <div className="d-inline-flex">
                                                <img src={book.image} alt={book.title}></img>
                                                <strong className = "ml-3">
                                                    {book.title} by {book.authors.map((author, index) => {
                                                        if (book.authors.length === 1) {
                                                            return author
                                                        }
                                                        else if (index === book.authors.length - 1) {
                                                            return ("& " + author)
                                                        }
                                                        else {
                                                            return (author + ", ")
                                                        }
                                                    })}
                                                </strong>
                                            </div>

                                            <p>{book.description}</p>
                                            <a className= "mr-3" rel = "noopener noreferrer" href = {book.link} target = "_blank">Click for more Information</a>
                                            <RemoveBtn onClick={() => this.removeBook(book._id)} />
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