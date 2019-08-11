

//slider arrows functions
let startSlide = function() {
    var prevArrow = document.getElementsByClassName('slideshow-left-control')[0];
    var nextArrow = document.getElementsByClassName('slideshow-right-control')[0];

    prevArrow.addEventListener('click', CHESLIDESHOW.prevSlide);
    nextArrow.addEventListener('click', CHESLIDESHOW.nextSlide);
};

//find all country 
const findCountry = function findCountry(){
const result = countries.filter((country) => {
    let findInput = document.querySelector("#findInput").value.toString()
    let currentCountry = JSON.stringify(country.name).toLowerCase()
    return (currentCountry.includes(findInput))
})
return result
}
//find One
const findOneFunction = function findOne(){
    const oneCountry = countries.filter((country) => {
        let findInput = JSON.stringify(document.querySelector("#findInput").value)
        let currentCountry = JSON.stringify(country.name).toLowerCase()
        const { name,flag } = country;
        console.log(currentCountry)
        console.log(findInput)
        if (currentCountry === findInput) return {countryName: name,flag}
})
return oneCountry
}
//clean & show
const cleanDisplay = function cleanDisplay(){
    $("#imgSlider").html("")
    $("#indicator").html("")
}


///  find all function
const flagAndName = function flagAndName(countries){
    const countryFlags = countries.map((country ,index) => {
    const {name,flag} = country;
    return{name,flag}
})
countryFlags.map((flag,index) => {
    if(countryFlags.length < 2){{$(".slideshow-arrow").hide()}}
    else{$(".slideshow-arrow").show()}
    let countryName = flag.name
    let flagImg = flag.flag
    let inactive = "inactive"
    let indicator = "inactive-indicator"
    if(index<1) {inactive = "";  
    indicator = "";}
    
$("#indicator").append(` <li class='slideshow-indicator ${indicator}'></li>`)
$("#imgSlider").append(`<div class='che-slideshow-slide ${inactive}'><img src='${flagImg}'><div class='che-slideshow-caption'>${countryName}</div>`) 

})
}


///  find capital function
const flagAndCapital = function flagAndCapital(countries){
    const countryFlags = countries.map((country ,index) => {
    const {capital,flag} = country;
    return{capital,flag}
})
countryFlags.map((flag,index) => {
    if(countryFlags.length < 2){{$(".slideshow-arrow").hide()}}
    else{$(".slideshow-arrow").show()}
    let countryCapital = flag.capital
    let flagImg = flag.flag
    let inactive = "inactive"
    let indicator = "inactive-indicator"
    if(index<1) {inactive = "";  
    indicator = "";}
    
$("#indicator").append(` <li class='slideshow-indicator ${indicator}'></li>`)
$("#imgSlider").append(`<div class='che-slideshow-slide ${inactive}'><img src='${flagImg}'> <div class="che-slideshow-caption capital"><h3>${countryCapital}</h3></div>`)

})
}
//on click find all 
const findAll = $("#findAll")
findAll.on("click",function(){
    cleanDisplay()
   let countries = findCountry()
    flagAndName(countries)
    startSlide()
    document.querySelector('.che-slideshow').style.visibility = "visible"
    })

//on click find one 
const findOne = $("#findOne")
findOne.on("click",function(){
    console.log('clicked')
    cleanDisplay()
    let countries = findOneFunction()
    flagAndName(countries)
    startSlide()
    document.querySelector('.che-slideshow').style.visibility = "visible"
})

//on click find Capital city
const findCapital = $("#findCapital")
findCapital.on("click",function(){
    cleanDisplay()
    let countries = findCountry()
    flagAndCapital(countries)
    startSlide()
    document.querySelector('.che-slideshow').style.visibility = "visible"

        })





