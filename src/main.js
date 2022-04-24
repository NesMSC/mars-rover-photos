import getRovers from "./rovers.js";

const dataRovers = async () => {
    const rovers = await getRovers;
    printData(rovers.rovers);
    
}

const printData = (rovers) => {
    const roversMain = document.getElementById('rovers');
    rovers.forEach(element => {
        const template = `
            <div class="card">
                <div class="card-header">
                    <picture>
                        <img src="assets/img/${element.name}.jpg" alt="Rover">
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
                        <li>${element.total_photos}</li>
                    </ul>
                </div>
            </div>
        `
        roversMain.innerHTML += template;
    });
}

window.addEventListener('load', dataRovers());