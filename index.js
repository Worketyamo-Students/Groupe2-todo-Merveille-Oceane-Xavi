
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
        completetable.style.background = " #25273D"
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
        completetable.style.background = "white"


    }

}
//implementations des evenements

let input = document.getElementById('input')
let check = document.getElementById('check')
let checkimg = document.getElementById('checkimg')
let parent = document.getElementById('parent')
let categorie = document.getElementById("categorie")
let croix = document.getElementById('croix')
let check1 = document.getElementById('check1')

let texte = document.getElementById('texte')
let table1 = document.getElementById("table1")
let table2 = document.getElementById("table2")
let table3 = document.getElementById("table3")
let alltable = document.getElementById("allTable")
let alltable1 = document.getElementById("allTable1")
let compte = document.getElementById("compte")
let compte1 = document.getElementById("compte1")
let select= document.getElementById("select")
let suppr =document.getElementById("suppr")

let category = document.getElementById("category")
let suppression= document.getElementById("suppression")
let suppression2= document.getElementById("suppression2")
let count = 0;  //compteur
const maxElement = 8; //max d'elements
// let all=document.getElementById("all")
// let activetable =document.getElementById("activetable")
// let completetable = document.getElementById("completetable")

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
            alltable.style.display="none"


            suppression2.addEventListener("click", function() {
                // Sélectionner toutes les cases à cocher
                let checkboxes = document.querySelectorAll('.select'); // Assurez-vous que les éléments à vérifier ont la classe "checkbox"
            
                // Boucle à travers toutes les cases à cocher
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        // Si la case est cochée, on supprime l'élément parent
                        let elementToRemove = checkbox.closest('.Element'); // Assurez-vous que '.item' est l'élément à supprimer
                        if (elementToRemove) {
                            elementToRemove.remove(); // Supprime l'élément
                        }
                    }
                });
            })
            console.log(count)
            if (textElement) {
                textElement.innerHTML = contenu;
            }
            parent.appendChild(newElement);//ajout de l'element dans le tableau
            parent.insertBefore(newElement, categorie);
            checkimg.style.display = "none";
            
            suppression.addEventListener("click", function() {
                // Sélectionner toutes les cases à cocher
                let checkboxes = document.querySelectorAll('.select'); // Assurez-vous que les éléments à vérifier ont la classe "checkbox"
            
                // Boucle à travers toutes les cases à cocher
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        // Si la case est cochée, on supprime l'élément parent
                        let elementToRemove = checkbox.closest('.Element'); // Assurez-vous que '.item' est l'élément à supprimer
                        if (elementToRemove) {
                            elementToRemove.remove(); // Supprime l'élément
                        }
                    }
                });
            })

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
                count=count-1;
                
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
            let previousClone = null; // Variable pour garder la référence du dernier clone

table1.addEventListener('click', () => {
    // Si un clone précédent existe, on le supprime
    if (previousClone !== null) {
        previousClone.remove();
    }

    // Mise à jour de l'affichage du nombre d'éléments restants
    compte1.innerHTML = count + " " + "items left";
    
    // Cloner l'élément
    let all = newElement.cloneNode(true); // Clonage de l'élément avec ses enfants

    console.log(all);

    // Ajouter le clone au tableau 
    alltable.appendChild(all);
    
    // Afficher la catégorie 
    category.style.display = "flex";

    // Insérer le clone avant l'élément de catégorie 
    alltable.insertBefore(all, category);

    // Afficher le tableau et masquer le parent 
    alltable.style.display = "flex";
    parent.style.display = "none";
    //completetable.style.display="none"
    // Mettre à jour la référence du dernier clone
    previousClone = all;
});

            //cocher les elements
           
            let active = false;  // Variable pour gérer l'état actif (sélectionné ou non)

            select.addEventListener("click", (e) => {
                // Alterner l'état entre "coché" et "décoché"
                active = !active;  // Inverse l'état à chaque clic
            
                if (active) {
                    // Lors du clic, l'élément devient sélectionné
                    checki.style.display = "flex";  // Afficher l'icône de coche
                    select.style.backgroundImage = "linear-gradient(to bottom, #3710BD 0, #A42395 100%)";  // Changer le fond du bouton
                    textElement.style.textDecoration = "line-through";  // Barrer le texte
                    textElement.style.color = "#B0B0B0";  // Change la couleur du texte pour un aspect "complété"
                } else {
                    // Lors du clic, l'élément devient désélectionné
                    checki.style.display = "none";  // Masquer l'icône de coche
                    select.style.backgroundImage = "none";  // Réinitialiser le fond du bouton
                    textElement.style.textDecoration = "none";  // Retirer le barré du texte
                    textElement.style.color = "";  // Réinitialiser la couleur du texte
                }




        ///////////////////////////////////////////////////////////////////////////////////////
                // Ajout à "table3" quand sélectionné
                table3.addEventListener('click', (a) => {

                        // Si un clone précédent existe, on le supprime
                 if (previousClone !== null) {
                         previousClone.remove();
                     }
                     parent.style.display = "none";
                    alltable.style.display="flex";
                    // Changer les couleurs des tables lors du clic
                    table3.style.color = "#3A7CFD";
                    table2.style.color = "#9495A5";
                    table1.style.color = "#9495A5";
            
                    // Mettre à jour le nombre d'items
                    compte1.innerHTML = count + " " + "items left";
            
                    // Clone l'élément sélectionné et l'ajoute au tableau complet
                    let completetable = newElement.cloneNode(true);
                    console.log(completetable);
            
                    // Ajouter l'élément cloné à la table
                    category.style.display = "flex";
                    alltable.insertBefore(completetable, category);
                    alltable.appendChild(completetable);  // Ajoute l'élément cloné à la fin du tableau
            
                    suppression.addEventListener("click" ,function(){

                        alltable.removeChild(completetable)

                    })

                    // Option pour supprimer l'élément cloné
                    let suppr = completetable.querySelector(".suppr");
                    suppr.addEventListener("click", () => {
                        alltable.removeChild(completetable);  // Supprimer l'élément du tableau
                        

                    
                    });

                    
                    suppression.addEventListener("click", function() {
                        // Sélectionner toutes les cases à cocher
                        let checkboxes = document.querySelectorAll('.select'); // Assurez-vous que les éléments à vérifier ont la classe "checkbox"
                    
                        // Boucle à travers toutes les cases à cocher
                        checkboxes.forEach(checkbox => {
                            if (checkbox.checked) {
                                // Si la case est cochée, on supprime l'élément parent
                                let elementToRemove = checkbox.closest('.Element'); // Assurez-vous que '.item' est l'élément à supprimer
                                if (elementToRemove) {
                                    elementToRemove.remove(); // Supprime l'élément
                                }
                            }
                        });
                    })




                        

                        // Afficher le tableau et masquer le parent 
                alltable.style.display = "flex";
                 parent.style.display = "none";
                 //completetable.style.display="none"
                 // Mettre à jour la référence du dernier clone
                previousClone = all;
                 });
            });
            
    /////////////////////////////////////////////////////////////////
            //table active
          
            table2.addEventListener("click", () => {
                // Change la couleur des tables
                table2.style.color = "#3A7CFD";
                table1.style.color = "#9495A5";
                table3.style.color = "#9495A5";
                
                // Cache ou affiche les éléments
                parent.style.display = "none";
                alltable.style.display = "flex";
                completetable.style.display = "none";
                
                // Récupère tous les éléments avec une case à cocher
                let checkboxe = document.querySelectorAll('.select'); // Assurez-vous que les éléments à filtrer ont la classe "checkbox"
                
                // Crée un tableau pour les éléments non cochés
                let nonCheckedItems = [];
            
                checkboxe.forEach(checkbox => {
                    if (!checkbox.checked) {
                        // Si la case n'est pas cochée, ajoute l'élément correspondant à la liste
                        nonCheckedItems.push(checkbox.closest('.Element')); // Assurez-vous que '.item' est le parent ou l'élément que vous voulez afficher
                    }
                });
            
                // Cache tous les éléments et affiche uniquement ceux non cochés
                document.querySelectorAll('.Element').forEach(item => {
                    item.style.display = 'none'; // Cache tous les éléments
                });
            
                // Affiche uniquement les éléments non cochés
                nonCheckedItems.forEach(item => {
                    item.style.display = 'block'; // Affiche les éléments non cochés
                });
            });
            


        } else {
            alert('Chaine est tres courte')
        }
    }

})



            