import React, { Component } from 'react';
import { FormControl, FormGroup, Button, Col } from 'react-bootstrap';
class EditBookmarkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.bookmark.id,
            title: this.props.bookmark.title,
            url: this.props.bookmark.url
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, title, url } = this.state;
        this.props.editBookmark(id, title, url);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="formInlineName">
              <FormControl name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange}/>
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
              <FormControl name="url"
                    type="text"
                    placeholder="Url..."
                    value={this.state.url}
                    onChange={this.handleChange}/>
            </FormGroup>{' '}
            <Button type="submit">Update Bookmark</Button>
        </form>  
        )
    }
}
export default EditBookmarkForm;