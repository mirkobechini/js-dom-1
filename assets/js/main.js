//Functions
function changeLampStatus(button){
    if(button.innerText === "Accendi"){
        lamp.src = "./assets/img/yellow_lamp.png"
        button.innerText = "Spegni"
    }else{
        lamp.src= "./assets/img/white_lamp.png"
        button.innerText = "Accendi"
    }
}

//Page Elements
const light_switch = document.getElementById("light-switch")
const lamp = document.getElementById("lamp")

//Event Handler
light_switch.addEventListener('click', function() {
    
    changeLampStatus(light_switch);
}
)