import React, { Component } from 'react';
import axios from 'axios';
import Bookmark from './Bookmark';

class BookmarksContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookmarks: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/bookmarks.json')
    .then(response => {
      console.log(response)
      this.setState({
        bookmarks: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="bookmarks-container">
        {this.state.bookmarks.map( bookmark => {
          return (
            <Bookmark bookmark={bookmark} key={bookmark.id} />
          )
        })}
      </div>
    )
  }
}

export default BookmarksContainer;
