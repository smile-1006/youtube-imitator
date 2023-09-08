
import axios from "axios";

const BASE_URL="https://youtube138.p.rapidapi.com" 

const options = {

    params: {
    hl: 'en',
    gl: 'US'
    },
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_IMITATOR_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

// WRITING AXIOS METHOD
export const fetchDataFromApi =async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
};