const buttons = document.querySelector(".mintbtn");
const nav = document.querySelectorAll(".btn");
const mint = document.querySelector(".mint");
const s = document.querySelectorAll(".d");

buttons.addEventListener('click', function(){
    mint.classList.toggle("show");
})


function chan(){
    let index = this.dataset.value;
    let i = 1;
     
    let r = document.querySelector(`.div-${index}`); 
    for(i=1;i<=4;i++){
        if(i!=index){    
        let f = document.querySelector(`.div-${i}`);
        f.classList.remove("on");
        

        }
        else{
            let d = document.querySelector(`.div-${index}`);
            d.classList.add("on");
            console.log(i);
        }
       
    }

}

nav.forEach((n) =>{
    n.addEventListener('click', chan);

});



