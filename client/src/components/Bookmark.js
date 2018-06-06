import React from 'react';
const Bookmark = ({bookmark, onRemoveBookmark=f=>f, editingBookmark=f=>f}) =>
    <div className="single-bookmark" key={bookmark.id}>
        <h4>#{bookmark.id} - {bookmark.title}</h4>
        <p>{bookmark.url}</p>
        <button onClick={() => onRemoveBookmark(bookmark.id)}>Delete</button>
        <button onClick={() => editingBookmark(bookmark.id)}>Edit</button>
        <hr/>
    </div>
export default Bookmark;