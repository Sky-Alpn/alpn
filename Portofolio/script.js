const hamburger = document.getElementById('hamburger');
const hamburgerList = document.getElementById('hamburger-list');

hamburger.addEventListener('click', () => {
    hamburgerList.classList.toggle('hidden');
});



function read() {
    var dots = document.getElementById('dots');
    var read = document.getElementById('read');
    var show = document.getElementById('show');
    
    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        read.innerHTML = 'Read More...';
        show.style.display = 'none';
    } else { 
        dots.style.display = 'none';
        read.innerHTML = 'Read Less...';
        show.style.display = 'inline';
    }
};

const more = document.querySelector('.read');

more.addEventListener('click', () => {
    read()
})