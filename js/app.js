const buttons = document.querySelector(".mintbtn");
const nav = document.querySelectorAll(".btn");
const mint = document.querySelector(".mint");
const s = document.querySelectorAll(".d");

buttons.addEventListener('click', function(){
    mint.classList.toggle("show");
})


let r = document.querySelector('.div-1');
r.classList.add("on");

function chan(){
    let index = this.dataset.value;
    let i = 1;
     
    
    for(i=1;i<=4;i++){
        if(i!=index){    
        let f = document.querySelector(`.div-${i}`);
        f.classList.remove("on");
        

        }
        else{
            let d = document.querySelector(`.div-${index}`);
            d.classList.add("on");
            
        }
       
    }

}

nav.forEach((n) =>{
    n.addEventListener('click', chan);

});



