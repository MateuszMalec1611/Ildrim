import simpleParallax from 'simple-parallax-js';

const images = document.querySelectorAll('.lightning-ico');
new simpleParallax(images, {
    delay: 1,
	overflow: true,
    scale: 2.8,
});


