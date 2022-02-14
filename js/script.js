
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

window.addEventListener('load', ()=>{
    document.querySelector(".mainImage").style.display= "block";
})

    function getParameter( parameterName ) {
        let parameters = new URLSearchParams( window.location.search );
        return parameters.get( parameterName );
    }

    let showRefcode = getParameter("refcode");

    if (getParameter("refcode")){
        refcodeAlert.innerHTML = `Referal Code <br> ${showRefcode}`;
    }

AOS.init();
