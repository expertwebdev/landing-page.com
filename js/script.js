
let toggleBtn = document.querySelector('.toggleBar');
let navBar = document.querySelector('.navBar');
let active = false;
toggleBtn.addEventListener('click', () => {
    if (active == false) {
        toggleBtn.classList.add('open');
        navBar.style.display = "block"
        active = true;

    } else {
        toggleBtn.classList.remove('open');
        navBar.style.display = "none"
        active = false;
    }

})

AOS.init();
