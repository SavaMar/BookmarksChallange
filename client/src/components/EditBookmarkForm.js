import React, { Component } from 'react';
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
            <input  name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange} />
            <input  name="url"
                    type="text"
                    placeholder="Url..."
                    value={this.state.url}
                    onChange={this.handleChange} />
            <button>Update Bookmark</button>
        </form>  
        )
    }
}
export default EditBookmarkForm;