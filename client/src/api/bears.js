import axios from 'axios';

const URL = 'http://localhost:3001/showcase';

export const getBears = () => axios.get(URL);
export const addBear = (bear) => axios.post(URL, bear);