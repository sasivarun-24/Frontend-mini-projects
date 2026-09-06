const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const num3=document.getElementById("num3");
const btn=document.getElementById("roll");
const min=1;
const max=6;
let randomnum1;
let randomnum2;
let randomnum3;
btn.onclick=function(){
randomnum1=Math.floor(Math.random()*max)+min;
randomnum2=Math.floor(Math.random()*max)+min;
randomnum3=Math.floor(Math.random()*max)+min;

num1.textContent=randomnum1;
num2.textContent=randomnum2;
num3.textContent=randomnum3;
}