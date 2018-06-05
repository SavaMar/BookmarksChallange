import React, { Component } from 'react';
import axios from 'axios';
import Bookmark from './Bookmark';
import NewBookmarkForm from './NewBookmarkForm';
import BookmarkSearch from './BookmarkSearch';

class BookmarksContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookmarks: []
    }
    this.addNewBookmark = this.addNewBookmark.bind(this)
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

  addNewBookmark(title, url) {
    axios.post( 'http://localhost:3001/api/v1/bookmarks', { bookmark: {title, url} })
    .then(response => {
        console.log(response)
        const bookmarks = [ ...this.state.bookmarks, response.data ]
        this.setState({bookmarks})
    })
    .catch(error => {
        console.log(error)
    })
  }

  render() {
    return (
      <div className="bookmarks-container">
        <BookmarkSearch/>
        <NewBookmarkForm onNewBookmark={this.addNewBookmark} />
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
