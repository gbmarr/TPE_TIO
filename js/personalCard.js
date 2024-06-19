"use strict"
//Crear un botón que al hacer click cambie el color de fondo de un div y agregue borde de 3px rojo..

let btnGeneratePersonalCard = document.getElementById("btn-generate-personal-card");
btnGeneratePersonalCard.addEventListener("click", generateCard);

function generateCard(){
    
    let name = document.getElementById("input-name").value;
    let lastName = document.getElementById("input-last-name").value;
    let occupation = document.getElementById("input-occupation").value;
    let email = document.getElementById("input-email").value;
    let tel = document.getElementById("input-tel").value;
    let address = document.getElementById("input-address").value;

    document.getElementById("card-left-top-header-name").innerHTML = name;
    document.getElementById("card-left-top-header-last-name").innerHTML = lastName;

    document.getElementById("card-left-top-body-occupation").innerHTML = occupation;

    document.getElementById("card-left-bot-text-email").innerHTML = email;
    document.getElementById("card-left-bot-text-tel").innerHTML = tel;
    document.getElementById("card-left-bot-text-address").innerHTML = address;
}