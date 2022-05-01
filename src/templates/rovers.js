import fetchData from '../utils/fetchData.js';
import Curiosity from '../assets/img/Curiosity.jpg';
import Opportunity from '../assets/img/Opportunity.jpg';
import Perseverance from '../assets/img/Perseverance.jpg';
import Spirit from '../assets/img/Spirit.jpg';


const getRovers = async () => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=jyVxWVo7kU1r7zSJJ5TEpXH24mKmK6uAV0pdGxSa';
    const rovers = await fetchData(url);
    const img = {
        Curiosity,
        Opportunity,
        Perseverance,
        Spirit
    }
    const cards = [];
    rovers.rovers.forEach(element => {
        const template = `
            <div id="${element.name.toLowerCase()}" class="card">
                <div class="card-header">
                    <picture>
                        <img src="${img[element.name]}" alt="Rover">
                    </picture>
                    <div class="card-name">
                        <span>${element.name}</span>
                    </div>
                </div>
                <div class="card-body">
                    <ul>
                        <li class="${(element.status == 'active')? 'active' : 'inactive'}">${element.status}</li>
                        <li class="info">Landing: </li>
                        <li>${element.landing_date}</li>
                        <li class="info">Launch: </li>
                        <li>${element.launch_date}</li>
                        <li class="info">Photos: </li>
                        <li>${new Intl.NumberFormat('En-us').format(element.total_photos)}</li>
                    </ul>
                </div>
            </div>
        `
        cards.push(template);
    });

    return cards;
}

export default getRovers();

