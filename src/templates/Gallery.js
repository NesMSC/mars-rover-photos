import fetchData from '../utils/fetchData.js';

const getPhotos = async ({
    sol = 1,
    earth_date = null,
    rover = 'curiosity',
    camera = null,
    page = 1
}) => {

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?`;

    url += (earth_date)? `earth_date=${earth_date}` : `sol=${sol}`;
    url += `&page=${page}`;
    url += (camera)? `&camera=${camera}` : '';
    url += `&api_key=jyVxWVo7kU1r7zSJJ5TEpXH24mKmK6uAV0pdGxSa`
    
    const data = await fetchData(url);

    const arrayGallery = [];

    data.photos.forEach(element => {
        const template = `
            <div class="gallery">
                <div class="gallery-item">
                    <div class="gallery-info">
                        <ul>
                            <li><strong>Camera: </strong>${element.camera.full_name} (${element.camera.name})</li>
                            <li><strong>Earth date: </strong>${element.earth_date}</li>
                            <li><strong>Sol: </strong>${element.sol}</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="${element.img_src}" loading="lazy" alt="Rover Photo">
                    </figure>
                </div>
            </div>
        ` 
        
        arrayGallery.push(template);
    });

    return arrayGallery;
}

export default getPhotos;