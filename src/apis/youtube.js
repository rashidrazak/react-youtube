import axios from 'axios'

// This key is meant to be publicly accessible so it's fine to put it here
// This key is restricted to be used from http://localhost:3000 only
const API_KEY = 'AIzaSyD_-ecmjXyKU5jhscwcdRD0lYMyoW-xY_E'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/'
})

export const baseParams = {
  part: 'snippet',
  type: 'video',
  maxResult: 5,
  key: API_KEY,
}
