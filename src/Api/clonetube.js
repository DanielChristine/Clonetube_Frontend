import axios from "axios";

const KEY = "AIzaSyAdw1bj67vUatA4S2jskQYyc31L4Fm4S1w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
