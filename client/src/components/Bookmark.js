import React from 'react';
const Bookmark = ({bookmark}) =>
    <div className="single-bookmark" key={bookmark.id}>
        <h4>{bookmark.title}</h4>
        <p>{bookmark.url}</p>
    </div>
export default Bookmark;