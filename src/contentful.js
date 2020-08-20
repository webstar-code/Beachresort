import { createClient } from 'contentful'


export default createClient({
  space: process.env.REACT_APP_SPACE_API,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN});