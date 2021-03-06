import React, { Component } from 'react';
import axios from 'axios';
import Bookmark from './Bookmark';
// import NewBookmarkForm from './NewBookmarkForm';
import EditBookmarkForm from './EditBookmarkForm';
import Header from './Header'

import { 
Row, Col, FormGroup,
ControlLabel,
FormControl,
HelpBlock, Table } from 'react-bootstrap';

class BookmarksContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookmarks: [],
      website: [],
      query: '',
      editingBookmarkId: null
    }
    this.addNewBookmark = this.addNewBookmark.bind(this)
    this.editingBookmark = this.editingBookmark.bind(this)
    this.editBookmark = this.editBookmark.bind(this)
    this.removeBookmark = this.removeBookmark.bind(this)
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/v1/bookmarks.json?q=${this.state.query}`)
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

  editingBookmark(id) {
        this.setState({
            editingBookmarkId: id
        })
    }

  editBookmark(id, title, url) {
    axios.put( 'http://localhost:3001/api/v1/bookmarks/' + id, { 
        bookmark: {
            title, 
            url
        } 
    })
    .then(response => {
        console.log(response);
        const bookmarks = this.state.bookmarks;
        bookmarks[id-1] = {id, title, url}
        this.setState(() => ({
            bookmarks, 
            editingBookmarkId: null
        }))
    })
    .catch(error => console.log(error));
  }

  removeBookmark(id) {
        axios.delete( 'http://localhost:3001/api/v1/bookmarks/' + id )
        .then(response => {
            const bookmarks = this.state.bookmarks.filter(
                bookmark => bookmark.id !== id
            )
            this.setState({bookmarks})
        })
        .catch(error => console.log(error))
    }

  getInfo = () => {
    axios.get(`http://localhost:3001/api/v1/bookmarks.json?q=${this.state.query}`)
      .then(response => {
      console.log(response)
      this.setState({
        bookmarks: response.data
      })
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <Row className="show-grid">
        <Header onNewBookmark={this.addNewBookmark}/>
        <Col xs={12} md={12}>
          <form>
            <input type="text" 
              className="form-control"
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          </form>
          </Col>
          <Col xs={12} md={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Website</th>
                <th>Link</th>
                <th>Short Link</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
            {this.state.bookmarks.map( bookmark => {
                    if ( this.state.editingBookmarkId === bookmark.id ) {
                        return (<EditBookmarkForm 
                                    bookmark={bookmark} 
                                    key={bookmark.id} 
                                    editBookmark={this.editBookmark} 
                        />)
                    } else {
                        return (
                          <Bookmark 
                                    bookmark={bookmark} 
                                    key={bookmark.id} 
                                    onRemoveBookmark={this.removeBookmark}
                                    editingBookmark={this.editingBookmark} 
                                    onWebsite={this.curentSite}
                        />)
                    }
                })}
              </tbody>
            </Table>
          </Col>
      </Row>
    )
  }
}

export default BookmarksContainer;
