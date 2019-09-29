import React, {Component} from 'react';
import {params, Youtube} from "./api/youtube";
import VideoPlayer from "./videoPlayer/videoPlayer";
import VideoList from "./videoList/videoList";
import {SearchBar} from "./searchBar/searchBar";

class VideoContainer extends Component {
    state = {
        search: 'super cars'
    }

    componentDidMount() {
        this.getVideo()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update')
        prevState.search !== this.state.search && this.getVideo()
    }


    getVideo = async () => {
        //console.log(this.state.search)
        const res = await Youtube('search', {params: {...params, q:this.state.search}})
        console.log(res.data.items[0].id.videoId)
            this.setState({
                data:res.data.items,
                chosenVideo:res.data.items[0]
            })

    }

    onSearch = (search) =>{

        this.setState({search})

    }

    chosenVideo = (video) =>{
        this.setState({chosenVideo:video})
    }



    render() {
        let {data,chosenVideo} =this.state
        console.log(chosenVideo)
        return(
            <>

                <SearchBar onSearch = {this.onSearch}/>

            <div className='video'>
                <VideoPlayer video={chosenVideo} data={data}/>
                <VideoList chosenVideo={this.chosenVideo} data={data}/>
            </div>
            </>
        )

    }
}

export default VideoContainer;