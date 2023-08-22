import React, { useState } from 'react';
import './Searchbar.scss';

// Importing the updateVideolist action will allow us to update the VideoList
import { updateVideoList, updateVideoListAvailability} from "../../actions";
// useDispatch allows us to dispatch our updateVideoList action
import { useDispatch } from "react-redux";

export function Searchbar() {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
  
    let part = 'part=snippet';
    const maxResults = 'maxResults=2';
    const type = 'type=video';
    const fields = 'fields=items%2Fsnippet%2Fthumbnails';

    async function handleClick(event) {
      event.preventDefault();

      const url = `api?${part}&${maxResults}&q=${query}&${type}`;
      
      const response = await fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(updateVideoListAvailability(true));
        dispatch(updateVideoList(data.items));
      })
      .catch(error => {
        console.log('error:');
        console.log(error);
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
                  <input type="text" name='searchinput' placeholder='Funny Cat Videos' className='videoinput' value={query} onChange={handleInputChange} />
                  <button className='submitbutton' type="submit">Search</button>
              </div>
          </form>
      </div>
    </>    
    )
  }

export default Searchbar;

  //old code where I attempted to get access to the video length

    // let idpart = 'part=snippet,contentDetails,statistics,status';
    // const id = 'id=8xORf5t7vXE';
      // const idurl = `/api?${id}&${idpart}&${type}`;
      // const testurl = `videos?${part}&${maxResults}&q=${query}&${type}`;

        // const videoIdentifier = data.items[0].id.videoId;
        // console.log(videoIdentifier);
        // part = 'part=snippet,contentDetails,statistics,status';
        // console.log(part);
        // const secondURL = `/api?${part}&${maxResults}&q=${query}&${type}${videoIdentifier}`;
        // console.log(secondURL);

        // secondAPICall(secondURL);
        // const secondResponse = fetch(secondURL)
        // .then(secondResponse => secondResponse.json())
        // .then(data => {
        //   console.log(data.items);
        //   setVideos(data.items);
        // })
        // console.log(data.items[0].contentDetails.duration);


    // async function secondAPICall(secondURL) {
    //   const secondResponse = await fetch(secondURL)
    //   .then(secondResponse => secondResponse.json())
    //   .then(newData => {
    //     console.log(newData.items);
    //     setVideos(newData.items);
    //     console.log(newData.items);
    //   })
    // .catch(error => {
    //   console.log('error');
    // });
    // }