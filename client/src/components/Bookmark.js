import React from 'react';
import { Table } from 'react-bootstrap';

const Bookmark = ({bookmark, onRemoveBookmark=f=>f, editingBookmark=f=>f, onWebsite=f=>f}) =>
    
        <tr key={bookmark.id}>
          <td>{bookmark.id}</td>
          <td>{bookmark.title}</td>
          <td>{bookmark.website? (bookmark.website||{}).top_url||0 : "fidoi"}</td>
          <td>{bookmark.url}</td>
          <td>{bookmark.short_url}</td>
          <td>
            {              
                bookmark.tags.map( tag => {
                  if(bookmark.tags){
                    tag.name
                  }
                })
            }
          </td>      
          <td>
              <button onClick={() => onRemoveBookmark(bookmark.id)}>Delete</button>
              <button onClick={() => editingBookmark(bookmark.id)}>Edit</button>
          </td>
        </tr>
export default Bookmark;