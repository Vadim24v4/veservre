document.addEventListener('DOMContentLoaded', function() {
    
    let btn = document.querySelector('.on_diagram')
    let infBox = document.querySelector('.information__box')

   
    
    btn.onclick = function(){
        if(infBox.classList.contains('active') == false){
            infBox.classList.add('active')
            btn.classList.remove('on_diagram')

        }else{
            infBox.classList.remove('active')
            btn.classList.add('on_diagram')

        }
    }




    let catalogBtn = document.querySelector('.information__plus')
    let catalogBtn2 = document.querySelector('.information_two')

    
    catalogBtn2.onclick = function(){
        catalogBtn2.classList.toggle('active')

    }
    catalogBtn.onclick = function(){
        catalogBtn.classList.toggle('active')
    }


    let burger = document.querySelector('.header__burger-btn')
    let menu = document.querySelector('.header__menu')

    burger.onclick = function(){
          menu.classList.toggle('active')
          burger.classList.toggle('active')
    }

    
})
