import React from 'react';
const Bookmark = ({bookmark, onRemoveBookmark=f=>f, editingBookmark=f=>f, onWebsite=f=>f}) =>
    <div className="single-bookmark" key={bookmark.id}>
        <h4>#{bookmark.id} - {bookmark.title}</h4>
        <h5>{bookmark.website.top_url}</h5>
        <p>{bookmark.url}</p>
        {console.log(bookmark.tags)}
        {bookmark.tags.map(( tag) => {
          <p>{tag.name}</p>
        })}
        <button onClick={() => onRemoveBookmark(bookmark.id)}>Delete</button>
        <button onClick={() => editingBookmark(bookmark.id)}>Edit</button>
        <hr/>
    </div>
export default Bookmark;