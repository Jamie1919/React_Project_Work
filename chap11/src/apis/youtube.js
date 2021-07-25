import axios from 'axios';

const KEY = 'AIzaSyAltpDTZqhshXSi58XC-B5237KKKuJl434';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

