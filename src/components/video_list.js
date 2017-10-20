import React from 'react';
import VideoListItem from './video_list_item';

//the props is sent by parent class giving data
const VideoList = (props)=>{
    //For addding the css class with ClassName
    const videoItems = props.videos.map((video)=>{
      return <VideoListItem key={video.etag} video={video} />  
    });


    return( <ul className="col-md-4 list-group"> 
        {videoItems}   
</ul>  ) 
}

export default VideoList;