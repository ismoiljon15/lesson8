console.log("JS started");

// Logical operators

// && - and - va uchun barcha qiymatlar "true" bo'lishi kerak
// || - or - yoki uchun bitta qiymat "true" bo'lsa kifoya
// ! - teng emas

// if( 5 > 3 && 4 === 4 ){
//     console.log("Ha");
// }else{
//     console.log("Yoq");
// }



const input = document.querySelector(".input_text")
const form =  document.querySelector(".form")
const image = document.querySelector(".container img")
const h3 = document.querySelector(".container h3")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let value = input.value
    if(value === ""){
        return alert("Please write your birthday year !!!")
    }


    let index = value % 12 + 1
    
    if(index === 1){
        image.setAttribute("src","./img/01.jpg" )
        h3.innerHTML = "Muchalingiz Maymun"
    }else if(index === 2){
        image.setAttribute("src", "./img/02.jpg")
        h3.innerHTML = "Muchalingiz Tovuq"
    }else if(index === 3){
        image.setAttribute("src", "./img/03.jpg")
        h3.innerHTML = "Muchalingiz Kuchuk"
    }
    else if(index === 4){
        image.setAttribute("src", "./img/04.jpg")
        h3.innerHTML = "Muchalingiz To'ng'iz"
    }
    else if(index === 5){
        image.setAttribute("src", "./img/05.jpg")
        h3.innerHTML = "Muchalingiz Sichqon "
    }
    else if(index === 6){
        image.setAttribute("src", "./img/06.jpg")
        h3.innerHTML = "Muchalingiz  Sigir"
    }
    else if(index === 7){
        image.setAttribute("src", "./img/07.jpg")
        h3.innerHTML = "Muchalingiz Yo'lbars "
    }
    else if(index === 8){
        image.setAttribute("src", "./img/08.jpg")
        h3.innerHTML = "Muchalingiz Quyon "
    }
    else if(index === 9){
        image.setAttribute("src", "./img/09.jpg")
        h3.innerHTML = "Muchalingiz Baliq "
    }
    else if(index === 10){
        image.setAttribute("src", "./img/10.jpg")
        h3.innerHTML = "Muchalingiz Ilon "
    }
    else if(index === 11){
        image.setAttribute("src", "./img/11.jpg")
        h3.innerHTML = "Muchalingiz Ot "
    }
    else if(index === 12){
        image.setAttribute("src", "./img/12.jpg")
        h3.innerHTML = "Muchalingiz Qo'y "
    }

    

    input.value = ""
})







































