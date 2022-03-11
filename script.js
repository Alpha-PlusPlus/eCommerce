// common JS

// prevent link controls from moving to top of page
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach((control) => {
    control.addEventListener("click", e => {
        e.preventDefault();
    })
})

// Cube 

const cube = document.querySelector('.cube');
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

document.querySelector(".top-x-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
});

document.querySelector(".left-y-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`
});

document.querySelector(".right-y-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
});

document.querySelector(".top-z-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
});

const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100);
    } else {
        clearInterval(interval);
    }    
};

playPause();

document.querySelector('.controls').addEventListener("mouseover", () => {
    bool = false;
    playPause();
});
document.querySelector('.controls').addEventListener("mouseout", () => {
    bool = true;
    playPause();
});

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

// Section 3

const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
    if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add("change");
    }
});

// Section 4

const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
    
    // Up
    if (axisY === -280) {
        watchTopControl.classList.add("hideControl");
    } else {
        watchTopControl.classList.remove("hideControl");
    }

    // Down
    if (axisY === 280) {
        watchBottomControl.classList.add("hideControl");
    } else {
        watchBottomControl.classList.remove("hideControl");
    }

    // Right
    if (axisX === 280) {
        watchRightControl.classList.add("hideControl");
    } else {
        watchRightControl.classList.remove("hideControl");
    }

    // Left
    if (axisX === -280) {
        watchLeftControl.classList.add("hideControl");
    } else {
        watchLeftControl.classList.remove("hideControl");
    }
}

watchTopControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`;
    hideControl();
})

watchBottomControl.addEventListener("click", () => {
    watchCases.style.marginTop = `${axisY += 70}rem`;
    hideControl();
})

watchRightControl.addEventListener("click", () => {
    watchBands.style.marginRight = `${axisX += 70}rem`;
    hideControl();
})

watchLeftControl.addEventListener("click", () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`;
    hideControl();
})