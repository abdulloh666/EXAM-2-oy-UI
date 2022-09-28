const inputEl1 = document.querySelector("#food-name")
const inputEl2 = document.querySelector("#food-cost")
const inputEl3 = document.querySelector("#food-photo")
const inputEl4 = document.querySelector("#food-cook")
const inputEl5 = document.querySelector("#food-cafe")
const formEl = document.querySelector("#form");
const resultDiv = document.querySelector("#result-div");


formEl.addEventListener("submit" , (e) =>{
    e.preventDefault();
    // DATE
    let oy = new Date().getMonth();
    let kun = new Date().getDay();
    let yil = new Date().getFullYear();

    console.log(oy);
    // CREATE ELEMENT
    let newEl = document.createElement("div");
    let photoSection = document.createElement("div");
    let infoSection = document.createElement("div");
    let btnSection = document.createElement("div");

    let imgElDiv = document.createElement("img");
    imgElDiv.src = inputEl3.value
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    console.log(btn1);
    // CLASS ADD

    newEl.classList.add("example");
    photoSection.classList.add("photo-div");
    infoSection.classList.add("info-div" , "info-style");
    btnSection.classList.add("btn-divv" , "btn-style");
    btn1.classList.add("btn-style__major" , "btn" , "btn-danger");
    btn2.classList.add("btn-style__major" , "btn" , "btn-warning");
    btn3.classList.add("btn-style__major" , "btn" ,"btn-success");

    // APPEND CHILD

    resultDiv.prepend(newEl);
    newEl.appendChild(photoSection)
    newEl.appendChild(infoSection)
    newEl.appendChild(btnSection)
    photoSection.appendChild(imgElDiv)
    infoSection.appendChild(p1);
    infoSection.appendChild(p2);
    infoSection.appendChild(p3);
    infoSection.appendChild(p4);
    imgElDiv.classList.add("photo-style");
    btnSection.appendChild(btn1)
    btnSection.appendChild(btn2)
    btnSection.appendChild(btn3)
    

    // INNER HTML
    p1.innerHTML = `Taom nomi: ${inputEl1.value}.`
    p2.innerHTML = `Taom narxi: $${inputEl2.value}.`
    p3.innerHTML = `Taom oshpaz: ${inputEl4.value}.`
    p4.innerHTML = `Taom restorani: ${inputEl5.value}.`

    // TEXT CONTENT

    btn1.textContent = "Delete";
    btn2.textContent = `${kun}/${oy}/${yil}`;
    btn3.textContent = "Done";  

    btn1.addEventListener('click' , () =>{
        const agree = confirm("Are you agree to delete this");
        if(agree){
            newEl.remove()
        }
        
    })

    btn3.addEventListener("click" , () => {
        newEl.classList.toggle("btn3-style");
    })

    inputEl1.value = "";
    inputEl2.value = "";
    inputEl3.value = "";
    inputEl4.value = "";
    inputEl5.value = "";
})


