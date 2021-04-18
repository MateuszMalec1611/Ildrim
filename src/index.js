// Test import of styles
import './styles/index.scss'

// JS files
import { galleryTop, mySwiper } from './js/swiper';
import './js/navigation';
import './js/footer';
import './js/form';
import './js/scroll-spy';
import './js/animate';
import './js/parallax';
import './js/lozad';


window.onload = () => {
    galleryTop.init();
    mySwiper[0].init();
    mySwiper[1].init();
}
