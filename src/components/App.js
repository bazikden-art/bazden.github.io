import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import Videolist from "./VideoList"
import VideoDetail from "./VideoDetail";


class App extends Component {
    state ={videos: [],selectedVideo:null}

    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    onTermSubmit = async term =>{
        const res = await youtube.get('/search',{
            params: {
                q: term,
                part:'snippet',
                maxResults:'5',
                key:'AIzaSyBG7yy05tSRTYG7Mi0ifNubgfXzxbnzbrg'
            }
        })
        this.setState({
            videos:res.data.items,
            selectedVideo:res.data.items[0]
        })
    }


    onVideoSelect = video =>{
        this.setState({selectedVideo:video})
    }


    render() {
        const {videos,selectedVideo} = this.state
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className='ui grid' >
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <Videolist videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>


                </div>


            </div>
        );
    }
}

export default App;