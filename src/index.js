// Test import of styles
import './styles/index.scss'

// JS files
import { gallery, swiperCards } from './js/swiper';
import './js/navigation';
import './js/footer';
import './js/form';
import './js/scroll-spy';
import './js/animate';
import './js/parallax';
import './js/lozad';
import './js/form-handling';


window.onload = () => {
    setTimeout(() => { 
        gallery.update();    
        swiperCards[0].update();
        swiperCards[1].update();
    }, 100);
}