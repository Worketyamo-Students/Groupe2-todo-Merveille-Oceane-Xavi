
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


                     //table 
                    table3.addEventListener('click', (a) => {
                    table3.style.color=" #3A7CFD"
                    table2.style.color=" #9495A5";
                    table1.style.color=" #9495A5";
                compte1.innerHTML = count + " " + "items left";
                let completetable = [""]
                
                completetable = newElement.cloneNode(true);
                console.log(completetable)
                
                category.style.display = "flex"
                alltable.insertBefore(completetable, category);
                alltable.appendChild()
                completetable.removeChild(newElement)
                // alltable.style.display="none"
                

                    })
                    suppr.addEventListener("click", ()=>{
                      alltable.removeChild(newElement);  
                    })

                 } else if(!active){
                    select.style.backgroundImage = "white"
                    checki.style.display = "none";
                    textElement.style.textDecoration = "none";
                    textElement.style.color = "";
                }
                
            })
            

            //table actived
            // table2.addEventListener('click', (a) => {
            //     compte1.innerHTML = count + " " + "items left"
            //     let completetable = [""]
            //     completetable = newElement.cloneNode(true);
            //     console.log(completetable)
            //     alltable.appendChild(completetable)
            //     category.style.display = "flex"
            //     alltable.insertBefore(completetable, category);
            //     alltable.style.display = "flex"
            //     all = completetable


                //suppression des coches
            //     if (test) {

            //         alltable.removeChild(active)

            //     }

            // })

            //table active
            table3.addEventListener("click", () => {
                table2.style.color=" #3A7CFD"
                table1.style.color=" #9495A5";
                table3.style.color=" #9495A5";
                //compte1.innerHTML = count + " " + "items left"
                parent.style.display = "none";
               alltable.style.display="flex";
                    let activetable = []
                    
                    
                 let T=select.addEventListener("click", (e) => {
                        let active = true;
                        let count1;
                        if (active) {
                            checki.style.display = "flex"
                            select.style.backgroundImage = "linear-gradient(to bottom, #3710BD 0, #A42395 100% )";
                            textElement.style.textDecoration = "line-through";
                             count1=count1 + 1;
                        }
                       
                    })
                    activetable = newElement.cloneNode(true);
                    if(T==true){
                        parent.style.display="none";
                   let tabletes=newElement;

                    tabletes.splice()
                        alltable.appendChild(activetable)
                        alltable.insertBefore(activetable, category);
                    }
                   //let count2=count - count1
                    compte1.innerHTML= count +" " +"items left";

                    table1.addEventListener('click', (a) => {
                        table3.split(table3.leng);
                    })
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

