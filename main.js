let row = document.querySelector(".row")
let inp = document.querySelector(".form-control")

let text = []
let text2 = []



function qidir(nimadir) {
    row.innerHTML=""
    inp.value=""
    let natija = massiv.filter(item => {
        return item.text.toLowerCase().includes(nimadir.toLowerCase())
    })
   text.push(natija)

   
   
   text.forEach(item => {
       
        let rasm = document.createElement("img")
        rasm.classList.add("w-25")
        rasm.src = item[0].img
        row.appendChild(rasm)
    })
    

}


// let row = document.querySelector(".row")
// let inp = document.querySelector(".form-control")

// let text = []
// let text2 = ""



// function qidir(nimadir) {

//     let natija = massiv.find(item =>{
//         return item.text.toLowerCase().includes(nimadir.toLowerCase())
//     })
//     console.log(natija);

//     text.push(natija)



    
   
// }
