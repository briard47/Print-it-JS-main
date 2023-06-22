///Slides///
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const bannerImage = document.getElementById("bannerImage");
const bannerText = banner.querySelector("p");
let currentSlide = 0; 

///Flèche Gauche///
const leftArrow=document.querySelector('.arrow_left')
leftArrow.addEventListener('click',showPreviousSlide)
function showPreviousSlide(){
	currentSlide = (currentSlide - 1 );
	if (currentSlide < 0) currentSlide = slides.length - 1;//loop//
	bannerImage.src = "./assets/images/slideshow/" + slides[currentSlide].image; 
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot();	
}

///Flèche Droite///
const rightArrow=document.querySelector('.arrow_right')
rightArrow.addEventListener('click', showNextSlide)
function showNextSlide(){
	currentSlide = (currentSlide + 1) ; 
	if (currentSlide >= slides.length) currentSlide = 0;//loop//
	bannerImage.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot();
}
///Dots///
for (let i = 0; i < slides.length; i++){
const newdots = document.querySelector(".dots");
const dot = document.createElement("div");
dot.classList.add("dot");
newdots.appendChild(dot);
}
const dots = document.querySelectorAll(".dot")
updateActiveDot() 
function updateActiveDot() {
	dots.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		}
	});
}
