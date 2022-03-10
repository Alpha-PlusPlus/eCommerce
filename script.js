// Slideshow

// Adding div elements with background image style
const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div');

        div.style.backgroundImage = `url(img/slideshow/section-1-bg-${i}.jpg)`;

        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
}

slideshowDivs();

// Animate slideshow by moving class across divs
const divs = document.querySelectorAll('.slideshow div');
let i = 0;
const transitionTime = 10000;

const slideshow = () => {
    setInterval(() => {

        divs[i].classList.remove('change');

        if (i >= divs.length - 1) i = 0;
        else i++; 
        
        divs[i].classList.add('change');

    }, transitionTime);
}

slideshow();