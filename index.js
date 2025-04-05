
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
        form.style.backgroundColor = " #25273D";
        body.style.backgroundColor = " #25273D"
        input.style.color = " #4D5067"
        check.style.borderColor = " #4D5067"
        categorie.style.color = " #5B5E7E"
        // categorie.style.backgroundColor=" #25273D"
        foot.style.color = " #5B5E7E";
        foot.style.background = "  #25273D"
        //  categorie.style.background ="#25273D";
        parent.style.background = " #25273D";
        element.style.color = " #C8CBE7";
        alltable.style.background = " #25273D"
        activetable.style.background = " #25273D"
    } else {
        mode.src = "./assets/img/lune.svg";
        hero.style.backgroundImage = "url('./assets/img/image1.svg')";
        body.style.backgroundColor = "white"
        check.style.borderColor = "gris"
        foot.style.background = " white"
        form.style.backgroundColor = "white";
        parent.style.background = " white";
        foot.style.color = " #9495A5";
        check.style.borderColor = " #9495A5 "
        input.style.color = " #9495A5  "
        alltable.style.background = "white"
        activetable.style.background = "white"


    }

}





let input = document.getElementById('input')
let check = document.getElementById('check')
let checkimg = document.getElementById('checkimg')
let parent = document.getElementById('parent')
let categorie = document.getElementById("categorie")
let croix = document.getElementById('croix')
let check1 = document.getElementById('check1')
//let checkimg1 = document.getElementById('checkimg1')
let texte = document.getElementById('texte')
let table1 = document.getElementById("table1")
let table2 = document.getElementById("table2")
let table3 = document.getElementById("table3")
let alltable = document.getElementById("allTable")
let compte = document.getElementById("compte")
let compte1 = document.getElementById("compte1")
let select= document.getElementById("select")

let category = document.getElementById("category")
let count = 0;  //compteur
const maxElement = 5; //max d'elements

input.addEventListener('keydown', function (event) {
    //ajouter un background a la div lorsque le quota est atteint

    contenu = input.value;
    if (contenu.length < 4) {
        check.style.backgroundImage = "none";

    } else {
        checkimg.style.display = "flex";
        check.style.backgroundImage = "linear-gradient(to bottom, #3710BD , #A42395)";
    }
    // ajout element
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
            parent.style.display = "flex";
            //clonage
            let newElement = element.cloneNode(true);
            newElement.style.display = "flex";
            let textElement = newElement.querySelector('#texte');
            count = count + 1;
            compte.innerHTML = count + " " + "items left"
            console.log(count)
            if (textElement) {
                textElement.innerHTML = contenu;
            }
            parent.appendChild(newElement);//ajout de l'element dans le tableau
            parent.insertBefore(newElement, categorie);
            checkimg.style.display = "none"

            // faire apparaitre le bouton delete "mouseover"
            let part = newElement.querySelector('#sousElement')

            let select = part.querySelector('#select')
            let checki = part.querySelector('#checkimg1')

            let sup = document.createElement('img')
            sup.src = "/assets/img/croix.svg"; sup.classList = "cursor-pointer"
            newElement.addEventListener('mouseover', () => {
                part.appendChild(sup)
            })

            // pour supprimer 
            sup.addEventListener('click', () => {
                parent.removeChild(newElement)
            })
            // pour disparaitre le delete 
            newElement.addEventListener('mouseleave', () => {
                part.removeChild(sup)
            })



            //effacer le contenu de l'input
            input.value = "";
            check.style.backgroundImage = "none";
            parent.style.display = "flex"


            //tableau all
            table1.addEventListener('click', (a) => {

                compte1.innerHTML = count + " " + "items left"
                let all = [''];
                all = newElement.cloneNode(true);

                console.log(all)
                alltable.appendChild(all)
                category.style.display = "flex"

                alltable.insertBefore(all, category);
                alltable.style.display = "flex"
                parent.style.display = "none";


            })


            //cocher les elements
           
            select.addEventListener("click", (e) => {
                let active = true;
                if (active) {
                    checki.style.display = "flex"
                    select.style.backgroundImage = "linear-gradient(to bottom, #3710BD 0, #A42395 100% )";
                    textElement.style.textDecoration = "line-through";
                }else if(!active){
                    select.style.backgroundImage = "white"
                    checki.style.display = "none";
                    textElement.style.textDecoration = "none";
                    textElement.style.color = "";
                }
                
            })

            //table actived
            table2.addEventListener('click', (a) => {
                compte1.innerHTML = count + " " + "items left"
                let activetable = []
                activetable = newElement.cloneNode(true);
                console.log(activetable)
                alltable.appendChild(activetable)
                category.style.display = "flex"
                alltable.insertBefore(activetable, category);
                alltable.style.display = "flex"
                all = activetable


                //suppression des coches
                if (test) {

                    alltable.removeChild(active)

                }

            })

            //table completed 
            table3.addEventListener("click", () => {

                compte1.innerHTML = count + " " + "items left"
                parent.style.display = "none";
                if (test) {
                    let completed = []
                    alltable.appendChild(completed)
                    completed = test;
                }

            })

        } else {
            alert('Chaine est tres courte')
        }
    }

})



            // implementation des selections



            
            // select.addEventListener("click", (e) => {


            //     checkimg1.style.backgroundImage = "url('./assets/img/vrai.svg')";
            //     select.style.backgroundImage = "linear-gradient(to bottom, #3710BD 0, #A42395 100% )";
            //     texte.style.textDecoration = "line-through";
            //         // select.style.backgroundImage = "linear-gradient(to bottom, #3710BD 0, #A42395 100% )"
            //         // // select.style.display = "flex"
            //         // checkimg1.style.backgroundImage = "url('./assets/img/vrai.svg')";
            //         // texte.style.textDecoration = "line-through"
            //         // texte.style.color = "#D1D2DA"
            //     if(active===false){
            //         select.style.background = ""
            //         check1.style.display = ""
            //         texte.style.textDecoration = ""
            //         texte.style.color = ""
            //     }
            // })