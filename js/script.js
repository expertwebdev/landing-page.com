
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

   // slideshow
   var slideIndex = 1;
   showSlides(slideIndex);
   
   // Next/previous controls
   function plusSlides(n) {
     showSlides(slideIndex += n);
   }
   
   // Thumbnail image controls
   function currentSlide(n) {
     showSlides(slideIndex = n);
   }
   
   function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     slides[slideIndex-1].style.display = "block";
   }
   

   // auto slider
   showSlides(slideIndex);
   
   function showSlides() {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
     slides[slideIndex-1].style.display = "block";
     setTimeout(showSlides, 2000); // Change image every 2 seconds
   }