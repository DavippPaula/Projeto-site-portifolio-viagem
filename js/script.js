

//----------Menu Cabeçalho--------------------------//
let elemento1 = document.querySelector('.icon')



elemento1.addEventListener('click', function menu(){
    let navgator = document.querySelector('.navegacao').style.display
   if(navgator == 'none'){
    document.querySelector('.navegacao').style.display = 'block'
   }else{
    document.querySelector('.navegacao').style.display = 'none'
   }
})








