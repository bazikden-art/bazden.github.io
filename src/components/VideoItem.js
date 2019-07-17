import React from 'react'

const VideoItem = ({video,onVideoSelect}) =>{

    return (
        <div onClick={()=>onVideoSelect(video)} className='item video-item'>
            <img className='ui imag' src={video.snippet.thumbnails.medium.url} alt=""/>
            <div className='content'>
                <div className="header title">
                    {video.snippet.title}
                </div>

            </div>
        </div>

    )
}

export default VideoItem