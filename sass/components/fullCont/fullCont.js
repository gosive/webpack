
const   scrim         = document.getElementById('scrim')


function show(ev, id){
  
 var elem 

  if (id === undefined){ //the func don't get an id
    id = ev.target.getAttribute('data-fullCont')
    elem = document.getElementById(id)

  }else{
    elem = document.getElementById(id)
  
  }


 // console.log('id',id)
 // console.log('elem',elem)
  elem.classList.add('fullCont-show')

  scrim.classList.add('scrim-show')
  scrim.setAttribute('data-serving', 'fullCont')
  scrim.setAttribute('data-fullcont', id)
}





var id
var elem


function hide(ev){  //close buttom
  // console.log('on fullcont hide', ev.target)

  elem = ev.target.parentNode.parentNode.parentNode
  
  elem.classList.add('fullCont-hide')
  scrim.classList.remove('scrim-show')

    remove(()=>{
        elem.classList.remove('fullCont-hide')
        elem.classList.remove('fullCont-show')
    })



}



function hideScrim(ev){  //when the scrim is clicked
  
   id   =  ev.target.getAttribute("data-fullcont")  
   elem =  document.getElementById(id)

  elem.classList.add('fullCont-hide')
  scrim.classList.remove('scrim-show')


    remove(()=>{
        elem.classList.remove('fullCont-hide')
        elem.classList.remove('fullCont-show')
    })


}


function remove(callback){
  setTimeout(()=>{
    callback()
  }, 700)
}

module.exports = {
  show:show, hide:hide, hideScrim:hideScrim
}


  // console.log('idddddddd', id, elem)
   //  const td = ev.target.parentElement
   //  console.log('td', td)
   //  const bounding = td.getBoundingClientRect() //get element position
   //  console.log('td.offsetWidth', td.offsetWidth)
   //  console.log('td.offsetHeight', td.offsetHeight)
    
   //  fullCont.style.top    = `${bounding.top}px`
   //  fullCont.style.left   = `${bounding.left}px`
   //  fullCont.style.width  = `${td.offsetWidth}px`   
   //  fullCont.style.height = `${td.offsetHeight}px`   


    // // fullCont.classList.add('fullCont')
   //   //fullCont.classList.add('fullCont-show')


   // const fullCont = document.createElement("div")

    // fullCont.style.width  =  ev.target.clientWidth  + 'px'
    // fullCont.style.height =  ev.target.clientHeight + 'px'
  // fullCont.innerHTML +=``
    // const elem = ev.target
    // fullCont.style.top  = elem.getBoundingClientRect().top  + "px"
    // fullCont.style.left = elem.getBoundingClientRect().left + "px" 

    // document.body.appendChild(fullCont)  


