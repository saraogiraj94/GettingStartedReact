import React from 'react';

const VideoListItem = (props) =>{
    //Pulling out video from props
    const video=props.video;
    //We can also use {video} in argument this is es6
    //console.log("Video is"+ JSON.stringify(video));
    //console.log(video.snippet.thumbnails.default.url);
    var imageUrl=video.snippet.thumbnails.default.url;
    var title=video.snippet.title;
    
    return (
        <li className="list-group-item">
            <div className="media-left">
                <img src={imageUrl} className="media-object"/>
            </div>
            <div className= "media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>

        </li>
    )
}

export default VideoListItem;