
let body = document.querySelector("body")
let hero = document.getElementById("hero-section")
let form = document.getElementById("formulaire")
let foot = document.getElementById("foot")
let element = document.getElementById("Element")

//implematation du dark mood
let mode = document.getElementById("mode");
mode.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        mode.src = "./assets/img/soleil.svg";
        hero.style.backgroundImage = " url('./assets/img/image-dark.svg')";
        form.style.backgroundColor = "#25273D";
        body.style.backgroundColor = "#171823"
        input.style.color = " #4D5067"
        check.style.borderColor = " #4D5067"
        categorie.style.color = "#5B5E7E"
        foot.style.color = " #5B5E7E";
        foot.style.background = " #4D5067"
        //  categorie.style.background ="#25273D";
        parent.style.background = " #25273D";
        element.style.color = " #C8CBE7";
    } else {
        mode.src = "./assets/img/lune.svg";
        hero.style.backgroundImage = "url('./assets/img/image1.svg')";
          body.style.backgroundColor = "white"
          check.style.borderColor = "gris"
          foot.style.background = " white"
          form.style.backgroundColor = "white";
          parent.style.background = " white";
          foot.style.color = " #9495A5";
         check.style.borderColor =" #9495A5 "
            input.style.color = " #9495A5  "
    }

}





let input = document.getElementById('input')
let check = document.getElementById('check')
let checkimg = document.getElementById('checkimg')
let parent = document.getElementById('parent')
let categorie = document.getElementById("categorie")


let count = 0;  //compteur
const maxElement = 5; //max d'elements

input.addEventListener('keydown', function (event) {
    //ajouter un background a la div lorsque le quota est atteint

    contenu = input.value;
    if (contenu.length < 4) {
        check.style.backgroundImage = "none";
       
    } else {
        checkimg.style.display = "flex";
        check.style.backgroundImage = "linear-gradient(to bottom, #3710BD 0, #A42395 100% )";
    }
    // ajout d'element
    if (event.key === "Enter") {
        let valeur = contenu;
        //condition d'arret
        if (count >= maxElement) {
            alert("impossible d'entree plus de 5 elements")
            checkimg.style.display = "none";
            check.style.backgroundImage = "none";
            return;
        }
        //verification pour une longueur d'au moins 5 carateres
        if (contenu.length >= 5) {
            parent.style.display = "flex"
            //clonage
            let newElement = element.cloneNode(true);
            newElement.style.display = "flex";
            let textElement = newElement.querySelector('#texte');
            if (textElement) {
                textElement.innerHTML = contenu;
            }
            parent.appendChild(newElement);//ajout de l'element dans le tableau
            parent.insertBefore(newElement, categorie);
            checkimg.style.display = "flex";
            
            // le mouseover sur la croix
            let div= newElement.querySelector("#sousElement")
            let croix = document.createElement('img')
            croix.src =  "assets/img/croix.svg"
            croix.id = "croix"
            croix.classList.add("cursor-pointer")
            newElement.addEventListener("mouseover", () => {
                div.appendChild(croix)
            })
            newElement.addEventListener("mouseleave", () => {
                let sortie = newElement.querySelector("croix")
                sortie.remove()
            })

        }
        else{
            alert("entrer une chaine plus longue")

        }
    }
})
