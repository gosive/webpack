
const menu       = document.getElementById('menu')
const scrimMenu  = document.getElementById('scrim_menu')


function show(ev){
    //console.log('to show menu')

    menu.classList.add('menu-show')
    scrimMenu.classList.add('scrim-show')
    scrimMenu.setAttribute('data-serving', 'menu')
    
    var px=0; 
    var py=0; 
    const elem     = ev.target
    const bounding = elem.getBoundingClientRect() //get element position

    //get X position → respect the edges of screem
    if ( bounding.left  + menu.offsetWidth > window.innerWidth ){
            px = bounding.left -  menu.offsetWidth  
    }else { px = bounding.left;}  


    //get Y position → respect the edges of screem
    if ( bounding.top +  menu.offsetHeight >  window.innerHeight ){
           py = bounding.top  -  menu.offsetHeight   }
    else { py = bounding.top +  elem.offsetHeight}

  	menu.style.left = `${px}px`
  	menu.style.top  = `${py}px`

}

function hide(){

  menu.classList.add('menu-hide')
  scrimMenu.classList.remove('scrim-show')
  scrimMenu.setAttribute('data-serving', '')

	remove(()=>{
			menu.classList.remove('menu-hide')
			menu.classList.remove('menu-show')
	})

}


function remove(callback){
	setTimeout(()=>{
		callback()
	}, 300)
}


module.exports = { 
	show: show,
	hide: hide

}

