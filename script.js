var display=document.querySelector(".display");
document.querySelectorAll('.button').forEach(function(button) {
  button.addEventListener("click", function(e) {
    console.log(e.target.value);

    if(e.target.value=="AC"){
      display.value="";
    }
    else if(e.target.value=="DEL"){
      display.value=display.value.slice(0,-1);
    }
    else if(e.target.value=="%"){
      display.value+='*0.01';
    }
    else if(e.target.value=="="){
      display.value=eval(display.value);
    }
    else{
      display.value+=e.target.value;
    }
  });
});