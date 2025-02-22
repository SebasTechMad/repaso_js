//STEAM, XBOX Y EPIC
let cargarVariables = () =>{

    const plataformas = ["steamjpg.jpg", "./xbox.jpg", "./epic.jpg"];
    const name_plataformas = ["steam", "xbox", "epic"];
    let current_plataforma = "";


    let imagen = document.getElementsByTagName("img");
    let enlace = document.getElementById("enlace");

    console.log(imagen);
    
    let cont = 0;
    setInterval(() => {
        
        console.log(plataformas[cont]);
        imagen[0].src = plataformas[cont];
        current_plataforma = name_plataformas[cont];

        if(cont == 2){
            cont = 0;
        }else{
            cont++;
        }


    }, 2000);

    enlace.addEventListener('click', function name() {
        sessionStorage.setItem("pagina", current_plataforma);
        location.href = "./index2.html";
    });

    

}

document.addEventListener('DOMContentLoaded', cargarVariables, false);


