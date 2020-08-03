const {changeSVG} = require('../../js/graphic')

function typing(ev){

	const elem   = ev.target
	const parent  = elem.parentElement


	setTimeout(()=>{
		//input empty or filled
		elem.value === '' ? 
		parent.classList.remove('input-filled') : 
		parent.classList.add('input-filled')

		// if (elem.value === 'err' ){
		// 	parent.classList.add('input-error')
		// 	changeSVG(parent.querySelector('.trailing'), 'error')			
		// }else{
		// 	parent.classList.remove('input-error')
		// 	changeSVG(parent.querySelector('.trailing'), 'clear')				
		// }

		
		

		if (elem.tagName === 'TEXTAREA'){
			textarea(elem)
		}
	
	},100)


}



function clear(ev){
	//console.log('on input clear')

	const  parent = ev.target.parentElement
	const  elem  = parent.querySelector('.elem')

	elem.value = ''
	elem.parentElement.classList.remove('input-filled')
	elem.parentElement.classList.remove('input-error')
	changeSVG(parent.querySelector('.trailing'), 'cancel')

	elem.focus() //keep input focus


	if (elem.tagName === 'TEXTAREA'){
		textarea(elem)
	}
}

//handle textarea increase
function textarea(elem){

	if(elem.value === ''){
		elem.style.height = '56px'
		return
	}

	if ( navigator.userAgent.indexOf("Firefox") != -1 ){
		 if (event.keyCode === 13) { 
			  setTimeout(function(){
			    elem.style.cssText = 'height:auto; padding:0';
			    // for box-sizing other than "content-box" use:
			     elem.style.cssText = '-moz-box-sizing:content-box';
			     elem.style.cssText = 'height:' + el.scrollHeight + 'px';
			  },0);

		 }
	}

	else {

		  setTimeout(function(){
		    elem.style.cssText = 'height:auto; padding:0';
		    elem.style.cssText = '-moz-box-sizing:content-box';
		    elem.style.cssText = 'height:' + elem.scrollHeight + 'px';
		  },0);
	}


}



module.exports = {
	typing: typing,
	clear: clear

}