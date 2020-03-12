import axios from 'axios';


const KEY = 'AIzaSyBuD4qUws34nOr0UAVfxMpWrXNwIUlikCw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});

