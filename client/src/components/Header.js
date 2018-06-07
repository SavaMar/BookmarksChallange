import React, { Component } from 'react';

import { Navbar, NavItem, Nav, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

const Header = ({onNewBookmark = f => f}) => {
  let title, url
  const submit = e => {
      e.preventDefault()
      onNewBookmark(title.value, url.value)
      title.value = ''
      url.value = ''
      title.focus()
  }

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Bookmarks</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight >
          <form onSubmit={submit}>
            <FormGroup controlId="formInlineName">
              <FormControl type="text" placeholder="Title" inputRef={input => title = input}/>
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
              <FormControl type="text" placeholder="url" inputRef={input => url = input}/>
            </FormGroup>{' '}
            <Button type="submit">Add Bookmark</Button>
          </form>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
