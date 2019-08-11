
(function() {
    var prevArrow = document.getElementsByClassName('slideshow-left-control')[0];
    var nextArrow = document.getElementsByClassName('slideshow-right-control')[0];

    prevArrow.addEventListener('click', CHESLIDESHOW.prevSlide);
    nextArrow.addEventListener('click', CHESLIDESHOW.nextSlide);
})();
const foundCountry = function foundCountry(){
const result = countries.filter((country) => {
    let findInput = document.querySelector("#findInput").value.toString()
    let currentCountry = JSON.stringify(country.name).toLowerCase()
    return (currentCountry.includes(findInput))
})
let countryFlags = result.map(country => country.flag)
console.log(countryFlags)
$("#imgSlider").html("")
$("#indicator").html("")
countryFlags.map((flag,index) => {
    let inactive = "inactive"
    let indicator = "inactive-indicator"
    if(index>1) {(inactive = "") && (indicator = "");}
$("#indicator").append(` <li class="slideshow-indicator ${indicator}"></li>`)
$("#imgSlider").append(`<div class='che-slideshow-slide ${inactive}'><img src='${flag}'><div class='che-slideshow-caption'>This is a caption for a photo.</div>`)   
})
}

const findAll = document.querySelector("#findAll")

findAll.addEventListener("click",function(){
    foundCountry()
    
    })




