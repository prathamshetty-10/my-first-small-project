let change=document.getElementById("tag");
function increment(){
    change.innerText=Number(Number(change.innerText)+1);
}
function decrement(){
    if(Number(change.innerText)==0){
        alert("cannot decrement more!!!!!");
    }
    else{
    change.innerText=Number(Number(change.innerText)-1);}
}
function reset(){
    change.innerText=0;
}
const btn1=document.getElementById("inc");
btn1.addEventListener("click",increment);
const btn2=document.getElementById("dec");
btn2.addEventListener("click",decrement);
const btn3=document.getElementById("res");
btn3.addEventListener("click",reset);
