const drawer   = require('../drawer/drawer')
const dialog   = require('../dialog/dialog')
const menu     = require('../menu/menu')
const fullCont = require('../fullCont/fullCont')




// const scrimDrawer   = document.getElementById('scrim_drawer')
// const scrimFullcont = document.getElementById('scrim_fullcont')
// const scrimFullcont = document.getElementById('scrim_fullcont_2')

// const scrimFile     = document.getElementById('scrim_file')
// const scrimGlass    = document.getElementById('scrim_glass')





//serving → elem in front of scrim
function show(ev, serving){

//console.log(' scrim.show() ev, serving', ev.target, serving)
	switch (serving){
		case 'drawer':   showScrim(true, serving);  drawer.show();		break;
		case 'fullCont': showScrim(true, serving);  fullCont.show(ev); 	break;
		case 'dialog':   showScrim(false, serving); dialog.show(); 		break;
		case 'menu':     showScrim(false, serving); menu.show(ev); 		break;

	}
}

//if the element use normal scrim → normal true | glass scrim false
function showScrim(normal, serving){

	if(normal){
		scrim.classList.add('scrim-show')
		scrim.setAttribute('data-serving', serving)			
		return
	}else{
		scrimGlass.classList.add('scrim-show')
		scrimGlass.setAttribute('data-serving', serving)
		return				
	}

}

//from the component from → true
//from touching the scrim from → false
function hide(ev, from){ 

// console.log( ' scrim →  hide(ev, from)', ev, from)
	
	var serving 
	var elem

	if(from){
		 serving = ev

	}else{ //if the user click srim
		elem    = ev.target
		serving = elem.getAttribute("data-serving")	
	}

console.log( ' serving → ', serving)
console.log( ' ev → ', ev)

	switch ( serving ){
		case 'drawer':    drawer.hide(); 	 scrim.classList.remove('scrim-show');    	break;
		case 'fullCont':  fullCont.hide(ev); scrim.classList.remove('scrim-show');	    break;
		case 'dialog':    dialog.hide(ev); 	 scrimGlass.classList.remove('scrim-show');	    break;
		case 'menu':      menu.hide(ev); 	 scrimGlass.classList.remove('scrim-show');	    break;
	}	
	

}





module.exports = {
	show:show,
	hide:hide

}
