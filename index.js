const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");
function getTime(){
  
   
    hour.innerText=new Date().getHours();
    
    minute.innerText=new Date().getMinutes();
   
    second.innerText=new Date().getSeconds();
    setTimeout(()=>{
        getTime()
    },1000)
}
getTime();




