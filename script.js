let btn = document.querySelector("button");
let img = document.querySelector("img");
let isOn = true;
btn.addEventListener("click" , function () {
    if (isOn){
        img.src = "images/Onbulb.png";
        btn.innerText = "off";
        btn.style.backgroundColor = "red";
        isOn = false; 
        
    }else{
        img.src = "images/Offbulb.png";
    btn.innerText ="On";
    btn.style.backgroundColor ="green"
    inOn = true;
    };
    
})