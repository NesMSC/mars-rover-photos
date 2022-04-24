import fetchData from './utils/fetchData.js';
function getRovers() {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY';
    return fetchData(url);
}

export default getRovers();

