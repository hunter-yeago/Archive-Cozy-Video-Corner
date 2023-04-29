import Videolist from "../Videolist/Videolist";
import React, { useState } from 'react';
import './Searchbar.scss';

export function Searchbar() {

    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
  
    const part = 'part=snippet';
    const maxResults = 'maxResults=5';
    const type = 'type=video';
  
    async function handleClick(event) {
      event.preventDefault();
      const url = `/api?${part}&${maxResults}&q=${query}&${type}`;
      const response = await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setVideos(data.items);
      })
      .catch(error => {
        console.log('error');
      });
      
    }
  
    function handleInputChange(event) {
      setQuery(event.target.value);
    }

    return (
        <>
            <div className="formcontainer">
                <form onSubmit={handleClick}>
                    <div className='innercontainer'>
                        <input type="text" className='videoinput' value={query} onChange={handleInputChange} />
                        <button className='submitbutton' type="submit">Search</button>
                    </div>
                </form>
            </div>   
            <Videolist vids={videos} />
        </>      
    )
}