import VideoAnchor from "../VideoAnchor"
import React, { useState } from 'react';

export function Searchbar() {

    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
  
    //Find way to hide API Key
    const part = 'part=snippet';
    const maxResults = 'maxResults=1';
    const type = 'type=video';
  
    async function handleClick(event) {
      event.preventDefault();
      const url = `/api?${part}&${maxResults}&q=${query}&${type}`;
      const response = await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
        <form onSubmit={handleClick}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId}>
          <iframe
            title={video.snippet.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{video.snippet.title}</p>
            <VideoAnchor props={video} />
        </li>
        ))}
      </ul>
        </>
        
    )
}