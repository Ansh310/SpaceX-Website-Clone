const btn=document.getElementById('menu-btn');

const overlay=document.getElementById('overlay');

const menu=document.getElementById('mobile-menu');

const counters=document.querySelectorAll('.counter');

let scrollStarted = false;

btn.addEventListener('click', function() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}
)

document.addEventListener('scroll', function() {
     const scrollPos = window.scrollY;
    
     if(scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
     }else if(scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
     }
}
)



function countUp() {
   counters.forEach((counter) => {
     counter.innerText='0';

     const updateCounter = () => {
        const target=+counter.getAttribute('data-target');
        const c= +counter.innerText;

        if(c < target) {
            counter.innerText = `${c+1}`;

            setTimeout(updateCounter, 75);
        }else {
            counter.innerText= target;
        }


        
    };

     updateCounter();
   });
}

function reset() {
    counters.forEach((counter) => counter.innerHTML='0');
}