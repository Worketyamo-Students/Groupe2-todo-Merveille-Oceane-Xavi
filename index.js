// let form=document.getElementById('test')

// let button=document.querySelector("button")
let body=document.querySelector("body")


let input=document.getElementById('input')
let check =document.getElementById('check')
let checkimg=document.getElementById('checkimg')
let parent =document.getElementById('parent')
let categorie =document.getElementById("categorie")
let element=document.getElementById("Element")


let count = 0;  //compteur
const maxElement = 5; //max d'elements

input.addEventListener('keydown', function(event){
    //ajouter un background a la div lorsque le quota est atteint

      contenu=input.value;
    if(contenu.lenght < 4){
check.style.backgroundImage = "none";
    }else{
        checkimg.style.display = "flex";
        check.style.backgroundImage="linear-gradient(135deg, #55DFF 0%,#C058F3 100%)";
    }
// ajout d'element
    if(event.key ==="Enter"){
        let valeur =contenu;
        //condition d'arret
        if(count >= maxElement){
            alert("impossible d'entree plus de 5 elements")
            checkimg.style.display ="none";
            check.style.backgroundImage = "none";
            return;
        }
//verification pour une longueur d'au moins 5 carateres
        if(contenu.length >= 5){
            parent.style.display ="flex"
            //clonage
            let newElement = element.cloneNode(true);
            newElement.style.display = "flex";
            let textElement = newElement.querySelector('#texte');
            if(textElement){
                textElement.innerHTML = contenu;
            }
            parent.appendChild(newElement);//ajout de l'element dans le tableau
            parent.insertBefore(newElement , categorie);
            checkimg.style.display = "none";


        }
    }
})