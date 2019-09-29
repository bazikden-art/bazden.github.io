import * as axios from "axios";

const API_KEY ="AIzaSyBG7yy05tSRTYG7Mi0ifNubgfXzxbnzbrg"

export const Youtube = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',

})

export const params ={
    key:API_KEY,
    part:'snippet',
    maxResults: 5,
}