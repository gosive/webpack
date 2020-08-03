
// const   scrim  = require('../scrim/scrim')
const   elem          = document.getElementById('drawer')
const   scrim         = document.getElementById('scrim')


function show(){

    elem.classList.add('drawer-anime')
    elem.classList.add('drawer-show')
    elem.setAttribute("style", `left: 0px`)
    
    scrim.classList.add('scrim-show')
    scrim.setAttribute('data-serving', 'drawer')  
}



function hide() {


    removeAnimation(()=>{
    scrim.classList.remove('scrim-show')
    scrim.setAttribute('data-serving', '')

    elem.classList.add("drawer-anime")
    elem.classList.add("drawer-hide")
    elem.setAttribute("style", `left: -${elem.clientWidth}-50px`)

        elem.classList.remove('drawer-show')
        elem.classList.remove('drawer-hide')

    })
    
}
function removeAnimation(callback){
  setTimeout(()=>{ callback() }, 10)
}


module.exports = {
    show:show, 
    hide:hide, 
    elem:elem
}