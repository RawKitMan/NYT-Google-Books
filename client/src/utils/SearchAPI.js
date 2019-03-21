import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  
  getGoogleBooks: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  
};