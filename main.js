let orderPizaa = document.querySelector('.order-pizza')
let orderBtn = document.querySelector('#order-btn')
let leaveBtn = document.querySelector('#leave-btn')
let aside = document.querySelector('#aside')
let selectBread = document.querySelector('#select-bread')
let nonPizza = document.querySelector('#non')
let kottaPizza = document.querySelector('#kotta')
let ortachaPizza = document.querySelector('#ortacha')
let kichikPizza = document.querySelector('#kichik')
let pizzaKattaligi = document.querySelector('#kattaligi')
let pomidor = document.querySelector('#pomidor')
let kurka = document.querySelector('#Kurka')
let zaytun = document.querySelector('#zaytun')
let bodring = document.querySelector('#bodring')
let qoziqorin = document.querySelector('#qoziqorin')
let qazi = document.querySelector('#qazi')
let ulItem = document.querySelector('.ul-item')
let achiq = document.querySelector('#achiq')
let sosiska = document.querySelector('#sosiskali')
let ulItem2 = document.querySelector('.ul-item2')
let modal  = document.querySelector('.modal')
let orderFood = document.querySelector('#order-food')
let removeModal = document.querySelector('#remove-modal')
let salom = document.querySelector('.salom')
let userName = document.querySelector('#user-name')

// var username = prompt('Salom hurmatli mijoz ismingiz nima ?')
// userName.textContent = username

orderFood.addEventListener('click', ()=>{
    modal.classList.add('active')
    orderPizaa.classList.remove('active')
    salom.classList.add('active')
})

removeModal.addEventListener('click', ()=>{
    modal.classList.remove('active')
    salom.classList.remove('active')
})

orderBtn.addEventListener('click', () =>{
    orderPizaa.classList.add('active')
    aside.classList.remove('active')

})

leaveBtn.addEventListener('click', () =>{
    aside.classList.toggle('active')
    orderPizaa.classList.remove('active')

})

selectBread.addEventListener('change', () =>{
    let selecValue = selectBread.value;
    switch (selecValue){
        case 'yupqa':
            nonPizza.innerHTML = 'Yupqa'
            break;
        case 'qalin':
            nonPizza.innerHTML = 'Qalin'
            break;
        case 'ortacha':
            nonPizza.innerHTML = "O'rtacha"        
    }
})

kottaPizza.addEventListener('click', () =>{
    if(kottaPizza.checked == true){
        pizzaKattaligi.innerHTML = '35 sm'
    }
})

ortachaPizza.addEventListener('click', () =>{
    if(ortachaPizza.checked == true){
        pizzaKattaligi.innerHTML = '30 sm'
    }
})

kichikPizza.addEventListener('click', () =>{
    if(kichikPizza.checked == true){
        pizzaKattaligi.innerHTML = '25 sm'
    }
})

pomidor.addEventListener('click', ()=>{
    if(pomidor.checked == true){
        let newLi = document.createElement('li')
        ulItem.appendChild(newLi)
        newLi.innerHTML = 'Pomidor'
    }else if(pomidor.checked == false){
        newLi = ulItem.children [0]
        ulItem.removeChild(newLi)
    }
})
kurka.addEventListener('click', ()=>{
    if(kurka.checked == true){
        let newLi = document.createElement('li')
        ulItem.appendChild(newLi)
        newLi.innerHTML = 'Kurka'
    }else if(kurka.checked == false){
        newLi = ulItem.children [1]
        ulItem.removeChild(newLi)
    }
})

zaytun.addEventListener('click', ()=>{
    if(zaytun.checked == true){
        let newLi = document.createElement('li')
        ulItem.appendChild(newLi)
        newLi.innerHTML = 'Zaytun'
    }else if(zaytun.checked == false){
        newLi = ulItem.children [2]
        ulItem.removeChild(newLi)
    }
})
bodring.addEventListener('click', ()=>{
    if(bodring.checked == true){
        let newLi = document.createElement('li')
        ulItem.appendChild(newLi)
        newLi.innerHTML = 'Bodring'
    }else if(bodring.checked == false){
        newLi = ulItem.children[3]
        ulItem.removeChild(newLi)
    }
})

qoziqorin.addEventListener('click', ()=>{
    if(qoziqorin.checked == true){
        let newLi = document.createElement('li')
        ulItem.appendChild(newLi)
        newLi.innerHTML = "Qo'ziqorin"
    }else if(qoziqorin.checked == false){
        newLi = ulItem.children[4]
        ulItem.removeChild(newLi)
    }
})

qazi.addEventListener('click', ()=>{
    if(qazi.checked == true){
        let newLi = document.createElement('li')
        ulItem.appendChild(newLi)
        newLi.innerHTML = "Qazi"
    }else if(qazi.checked == false){
        newLi = ulItem.children[5]
        ulItem.removeChild(newLi)
    }
})

achiq.addEventListener('click', ()=>{
    if(achiq.checked == true){
        let newLi = document.createElement('li')
        ulItem2.appendChild(newLi)
        newLi.innerHTML = 'Achchiq'
    }else if(achiq.checked == false){
        newLi = ulItem2.children[0]
        ulItem2.removeChild(newLi)
    }
})


sosiska.addEventListener('click', ()=>{
    if(sosiska.checked == true){
        let newLi = document.createElement('li')
        ulItem2.appendChild(newLi)
        newLi.innerHTML = 'Sosiskali'
    }else if(sosiska.checked == false){
        newLi = ulItem2.children[0]
        ulItem2.removeChild(newLi)
    }
})