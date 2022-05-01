import getRovers from './templates/rovers.js';
import getPhotos from './templates/Gallery.js';
import './css/main.css';
import Navbar from './templates/Navbar.js';
import Spinner from './templates/Spinner.js';

(async function App(){
    const nav = null || document.getElementById('nav');
    nav.innerHTML = Navbar;

    const roversMain = null || document.getElementById('rovers');


    const showRovers = async () => {
        roversMain.innerHTML = Spinner(true);
        const rovers = await getRovers;
        roversMain.innerHTML = Spinner(false);
        for (const rover of rovers) {
            roversMain.innerHTML += rover;
        }

        const cards = [...document.getElementsByClassName('card')];
        cards.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                showGallery({rover: element.id});
            });
        });
    }

    showRovers();

    const btn_rovers = null || document.getElementById('btn-rovers');
    btn_rovers.addEventListener('click', showRovers);

    const showGallery = async (options) => {
        roversMain.innerHTML = Spinner(true);
        const photos = await getPhotos(options);
        roversMain.innerHTML = Spinner(false);
        for (const photo of photos) {
            roversMain.innerHTML += photo;
        }
        
        document.getElementById('rover')
            .value = options.rover;
    }

    const btn = null || document.getElementById('btn');
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        showGallery({rover: 'Curiosity'});
    });
 
    document.querySelector('form')
        .addEventListener('submit', async e => {
            e.preventDefault();
            // Capturamos la data en un objeto
            const data = Object.fromEntries(
               new FormData(e.target)
            )
            
            showGallery(data);
        })

})()