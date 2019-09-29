import React from "react"

const VideoList = React.memo(({data,chosenVideo}) => {

    return (
        <div className='video-list'>
            {
                data && data.map(video => (
                        <div key={video.etag} className='video-item'>
                            <img onClick={() => chosenVideo(video)} src={video.snippet.thumbnails.medium.url}
                                 alt=""/>
                            <div><span>{video.snippet.title}</span></div>
                        </div>
                    )
                )
            }
        </div>
    )
})

export default VideoList