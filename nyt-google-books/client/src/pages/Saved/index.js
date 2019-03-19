import React, { Component } from "react";
import RemoveBtn from "../../components/RemoveBtn";
import { List, ListItem } from "../../components/List";
//import API from "../../utils/API";


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

    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col'>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => {
                                    return (
                                        <ListItem key={book._id}>
                                            <a href={"/books/" + book._id}>
                                                <strong>
                                                    {book.title} by {book.author}
                                                </strong>
                                            </a>
                                            <RemoveBtn/>} />
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