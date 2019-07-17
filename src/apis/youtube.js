import axios from 'axios'

//const KEY = 'AIzaSyBG7yy05tSRTYG7Mi0ifNubgfXzxbnzbrg'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3'
    // params:{
    //     part:'snippet',
    //     maxResults:'5',
    //     key:KEY
    // }
})

