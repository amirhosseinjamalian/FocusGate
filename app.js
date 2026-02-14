const ShowlinkBtn = document.querySelector(".Showlink");
const outer = document.querySelector('.outer');
const time = document.querySelector(".time");
const makelinkBtn = document.querySelector(".makelink");


let timer = 30;
const total = timer;
let intervalID;
let intervalID2;
let intervalID3;
let timeout1;
let test = false;
let color = 0;
let checked = false;

function makeLink(){
    makelinkBtn.style.visibility = 'visible';

    intervalID2 = setInterval(()=>{
        makelinkBtn.textContent+= '.'
    },700);
    setTimeout(()=>{clearInterval(intervalID2)} , 2200);
    setTimeout(()=>{
        makelinkBtn.textContent = 'در حال ساخت لینک';
        intervalID3 = setInterval(()=>{
            makelinkBtn.textContent+= '.'
        },700);
    } , 2800);
    setTimeout(()=>{clearInterval(intervalID3)} , 5000);
    

    setTimeout(()=>{
        makelinkBtn.textContent = 'دانلود';
        makelinkBtn.classList.remove('makelink2');
        makelinkBtn.addEventListener('click' , ()=>{open('flower.jpg')});
        checked = false;
    }, 5600);
}

function timeStop(){
    clearInterval(intervalID);
    clearTimeout(timeout1);
    test = false;
}

function timeStart(){
    if(!test){
        timeout1 = setTimeout(()=>{
            intervalID = setInterval(()=>{
                if(timer == 0){
                    clearInterval(intervalID);
                    window.removeEventListener('blur' , timeStop);
                    makeLink();
                    return;
                }
                time.textContent = --timer;
                outer.style.backgroundImage = `conic-gradient(transparent ${-(timer*360/total-360)}deg , gold 0deg)`;
                
            },1000)
        } , 2000)

        test = true;
        window.addEventListener('focus' , timeStart);
        window.addEventListener('blur' , timeStop);
        
    }
}


ShowlinkBtn.addEventListener("click", () => {
    ShowlinkBtn.classList.add("hidden");
    ShowlinkBtn.disabled = true;
    setTimeout(()=>{ShowlinkBtn.style.display = 'none'},2000);

    setTimeout(()=>{outer.classList.remove("hidden")},2100);
  
    // setTimeout(()=>{timeStart()},2700);
    timeStart()
    
    checked = true;
});


window.addEventListener('beforeunload' , (event)=>{
    if(checked){
        event.preventDefault();
        event.returnValue = '';
    }
})