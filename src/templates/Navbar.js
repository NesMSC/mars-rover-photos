import nasaLogo from '../assets/icons/nasaLogo.png';

const Navbar = () => {
    const template = `
        <nav>
            <a href="#">
                <img src="${nasaLogo}" alt="NASA ICON LOGO">
            </a>
            <ul>
                <li><a class="nav-btn_rovers" href="#" id="btn-rovers">Rovers</a></li>
                <li><a class="nav-btn" href="#" id="btn">Gallery</a></li>
            </ul>
        </nav>
    
    `
    return template;
};

export default Navbar();
