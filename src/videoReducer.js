import React, { useState } from 'react';
const initialState = {
    url: "",
    // The following is like that as it will render something empty on page load with VideoList
    // vids: [ {
    //     vids: [],
    // }],
    // vids: [{}],
    vidsAvailable: false,
    vids: [],
};

const videoReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'UPDATE_VIDEOLIST':

        console.log('firing from videoreducer');
        console.log(state.vids);
            return {
                ...state,
                vids: [...state.vids, action.payload],
            };


        case 'REMOVE_VIDEOLIST':
            return {
                ...state,
                videos: state.videos.filter(video => video.id !==action.payload)
            };

        case 'SHOW_VIDEO':
            return {
                ...state,
                videos: [...state.video, action.payload]
            };

        case 'UPDATE_VIDEOS_AVAILABLE':
            return {
                ...state,
                vidsAvailable: [...state.vidsAvailable, action.payload]
            }

        default:
            return state;
    }

};

export default videoReducer;