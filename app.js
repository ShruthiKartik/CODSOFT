let screen=document.getElementById('screen');
// console.log(screen);
let val='';

button=document.querySelectorAll('button');
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            val+=buttonText;
            screen.value=val;
        }
        else if(buttonText=='C'){
            val="";
            screen.value="";
        }
        else if(buttonText=='='){
            // console.log(val);
            screen.value=eval(val);
            val=screen.value;
        }
        else{
            val+=buttonText;
            screen.value=val;
        }
    });
}

