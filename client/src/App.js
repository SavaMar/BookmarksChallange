import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from 'react-router-dom'

import './App.css';
import BookmarksContainer from './components/BookmarksContainer';

class App extends Component {
  render() {
    return (
      <Grid>
        <BookmarksContainer/>
      </Grid>
    );
  }
}

export default App;
