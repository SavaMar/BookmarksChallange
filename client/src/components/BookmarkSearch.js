import React, { Component } from 'react'
import axios from 'axios'

class BookmarkSearch extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`http://localhost:3001/api/v1/bookmarks?&q=${this.state.query}`)
      .then(({ data }) => {
        console.log(data)
        this.setState({
          results: data.data
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
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

export default BookmarkSearch