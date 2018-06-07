import React from 'react';
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button, ControlLabel, Col } from 'react-bootstrap';

const NewBookmarkForm = ({onNewBookmark = f => f}) => {
    let title, url
    const submit = e => {
        e.preventDefault()
        onNewBookmark(title.value, url.value)
        title.value = ''
        url.value = ''
        title.focus()
    }

    return (
      <Col xs={12} md={12}>
        <form onSubmit={submit}>
          <Col xs={5} md={5}>
            <FormGroup controlId="formInlineName">
              <FormControl type="text" placeholder="Title" inputRef={input => title = input}/>
            </FormGroup>{' '}
          </Col>
          <Col xs={5} md={5}>
            <FormGroup controlId="formInlineEmail">
              <FormControl type="text" placeholder="url" inputRef={input => url = input}/>
            </FormGroup>{' '}
          </Col>
          <Col xs={2} md={2}>
            <Button type="submit">Add Bookmark</Button>
          </Col>
          </form>
      </Col>
    )
}

export default NewBookmarkForm;