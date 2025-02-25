// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosList = [];


function agregarAmigo(){
    let amigo = document.getElementById ('amigo').value;

    if(amigo === ""){
        alert('Por favor, inserte un nombre')
    }else{
        amigosList.push(amigo);
        console.log(amigosList);
        document.getElementById('amigo').value = '';
    }
    return amigosList;
    
}