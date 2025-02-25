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
        actualizarLista();
    }
    return amigosList;
    
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of amigosList) {
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    }
}