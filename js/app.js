const buttons = document.querySelector(".mintbtn");
const mint = document.querySelector(".mint");

buttons.addEventListener('click', function(){
	console.log("Hemlo");
    mint.classList.toggle("show");
})