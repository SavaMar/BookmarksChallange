import React from 'react';

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
        <form onSubmit={submit}>
            <input  ref={input => title = input}
                    type="text"
                    placeholder="Title..." required />
            <input  ref={input => url = input}
                    type="text"
                    placeholder="URL..." required />
            <button>Add Bookmark</button>
        </form>
    )
}

export default NewBookmarkForm;