const initialState = {
    vidsAvailable: false,
    // The following is like that as it will render something empty on page load with VideoList
    vids: [],
    windowIsVisible: true,
};

const videoReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'UPDATE_VIDEOLIST':
            console.log('firing from reducer');
            return {
                ...state,
                // vids: [...state.vids, action.payload],
                vids: action.payload,
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
                vidsAvailable: action.payload
            }

        default:
            return state;
    }

};

export default videoReducer;