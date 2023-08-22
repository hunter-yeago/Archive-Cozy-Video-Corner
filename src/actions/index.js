export const showVideo = (video) => {
    return {
        type: "SHOW_VIDEO",
        payload: {
            id: video.id.videoId,
            title: video.snippet.title,
            publishTime: video.snippet.publishTime,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails,
        },
    };
};

//Stores the new URL in State Management
export const updateVideoList = (newVids) => {

    return {
        type: "UPDATE_VIDEOLIST",
        payload: {
            vids: newVids,
        },
    };
};

export const updateVideoListAvailability = (availability) => {
    
    return {
        type: "UPDATE_VIDEOS_AVAILABLE",
        payload: {
            vidsAvailable: availability,
        },
    };
};

export const updateVideoURL = (url) => {
    
    return {
        type: "UPDATE_VIDEO_URL",
        payload: {
            newUrl: url,
        },
    };
};

export const removeVideolist = (videos) => {
    return {
        type: "REMOVE_VIDEOLIST",
        payload: {
            vids: videos,
        },
    };
};

export const updateSidePanelVisibility = (visibility) => {
    
    return {
        type: "UPDATE_VIDEO_URL",
        payload: {
            // newUrl: url,
        },
    };
};