const initialState = {
    displayVideoAvailable: false,
    videoListAvailable: false,
    // The following is like that as it will render something empty on page load with VideoList
    vids: [],
    windowIsVisible: true,
    // displayVideo: {},
};

const videoReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'UPDATE_VIDEOLIST':
<<<<<<< HEAD
            // console.log('firing in video update list reducer');
=======
            console.log('firing from reducer');
>>>>>>> 85a66d8... fixed bug where it wouldn't change the video after the first search - issue was that it would keep storing new states as new objects rather than overwrigin the first one
            return {
                ...state,
                // vids: [...state.vids, action.payload],
                vids: action.payload,
            };

        case 'UPDATE_VIDEO_DISPLAY':
            // console.log('firing in video update diaply reducer');
            return {
                ...state,
                displayVideo: action.payload,
            }
        case 'UPDATE_VIDEO_LIST_AVAILABLE':
            return {
                ...state,
                videoListAvailable: action.payload
            }

        case 'UPDATE_DISPLAY_VIDEO_AVAILABILITY':
            return {
                ...state,
                displayVideoAvailable: action.payload
            }

        // case 'REMOVE_VIDEOLIST':
        //     return {
        //         ...state,
        //         videos: state.videos.filter(video => video.id !==action.payload)
        //     };

        // case 'SHOW_VIDEO':
        //     return {
        //         ...state,
        //         videos: [...state.video, action.payload]
        //     };



        default:
            return state;
    }

};

export default videoReducer;