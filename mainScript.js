/*jslint browser: true */
/*global window */
var document = window.document;
var slideIndex = 0;

showSlides(1,1);
timeSlides();

function showSlides(index, divNum) {
    var divClass;
    if (divNum == 1)
        divClass = "decSlide1";
    else
        divClass = "decSlide2";
  
    var slides = document.getElementsByClassName(divClass);

    for (var i = 0; i < slides.length; i++)
        slides[i].style.display = "none";  
    
    slides[index-1].style.display = "block";  
}

function timeSlides() {  
    var slides = document.getElementsByClassName("banImg");
    
    for (var i = 0; i < slides.length; i++)
        slides[i].style.display = "none";  
    
    slideIndex++;
    
    if (slideIndex > slides.length)
        slideIndex = 1;
    
    slides[slideIndex-1].style.display = "block";
    window.setTimeout(timeSlides, 5000);
}