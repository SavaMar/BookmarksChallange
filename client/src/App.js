import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

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
