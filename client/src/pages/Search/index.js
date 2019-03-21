import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";
import SavedAPI from "../../utils/SavedAPI";
import SearchAPI from "../../utils/SearchAPI";


class Search extends Component {

    state = {

        books: [],
        search: ""

    };

    /*componentDidMount() {
        this.loadResults();
    };*/

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let searchTerm = this.state.search.replace(" ", "+");
        SearchAPI.getGoogleBooks(searchTerm)
            .then(res => {
                
                this.setState({books: res.data.items, search: ""})
            })
            .catch(err => console.log(err));
    };

    saveBook = (id) => {

        console.log(id);
        let book = this.state.books[id];
        SavedAPI.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.canonicalVolumeLink

        })
            .then(res => this.setState({ books: this.state.books.filter((book,index) => index !== id) }))
            .catch(err => console.log(err));
    }

    render() {
        return (

            <div className="container mt-5">
                <div className="input-group mb-3">
                    <label htmlFor="search" className="mr-2">Search for books:</label>
                    <input
                        type="text"
                        id="search"
                        className="form-control"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        aria-label="Search"
                        aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button onClick={this.handleFormSubmit} className="btn btn-danger text-dark btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>

                <div className="jumbotron">
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map((book, index) => {
                                return (
                                    <ListItem key={index} >
                                        <img src={book.volumeInfo.imageLinks.thumbnail} alt= {book.volumeInfo.title}></img>
                                        <strong>
                                            {book.volumeInfo.title} by {book.volumeInfo.authors.map(author => { return author + " " })}
                                        </strong>

                                        <p>{book.volumeInfo.description}</p>
                                        <SaveBtn onClick={() => this.saveBook(index)}/>
                                    </ListItem>
                                );
                            })}
                        </List>) : (<h3>No Results to Display</h3>
                        )}
                </div>
            </div>
        )
    }
}

export default Search;