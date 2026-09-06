const textbox=document.getElementById("textbox");
const c2f=document.getElementById("c2f");
const f2c=document.getElementById("f2c");
const result=document.getElementById("result");
let temp;
function convert(){
    if(c2f.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+'f'
    }else if(f2c.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+'c'
    }else{
        result.textContent="select a unit";
    }
    }
    

